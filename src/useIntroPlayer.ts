import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Lang } from './content';

export interface Word {
  text: string;
  sentence: number;
  /** Char index of the word inside its sentence, to match speech boundary events. */
  index: number;
  /** Estimated start time in ms, used when the voice reports no word boundaries. */
  at: number;
}

export type PlayerStatus = 'idle' | 'playing' | 'done';

// Rough speaking rate of browser voices at rate 1.
const WORD_MS = 110;
const CHAR_MS = 52;
const SENTENCE_GAP_MS = 420;
// If speech hasn't started by then, the voice is broken: play the transcript silently.
const START_TIMEOUT_MS = 1500;

export function splitWords(sentences: string[]) {
  const words: Word[] = [];
  let t = 0;
  sentences.forEach((sentence, s) => {
    for (const m of sentence.matchAll(/\S+/g)) {
      words.push({ text: m[0], sentence: s, index: m.index ?? 0, at: t });
      t += WORD_MS + CHAR_MS * m[0].length;
    }
    t += SENTENCE_GAP_MS;
  });
  return { words, total: t };
}

function pickVoice(voices: SpeechSynthesisVoice[], lang: Lang) {
  const score = (v: SpeechSynthesisVoice) =>
    (/natural/i.test(v.name) ? 4 : 0) + (/google/i.test(v.name) ? 2 : 0) + (v.default ? 1 : 0);
  return voices
    .filter((v) => v.lang.toLowerCase().startsWith(lang))
    .sort((a, b) => score(b) - score(a))[0];
}

const synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;

export function useIntroPlayer(sentences: string[], lang: Lang) {
  const { words, total } = useMemo(() => splitWords(sentences), [sentences]);
  const [status, setStatus] = useState<PlayerStatus>('idle');
  const [wordIdx, setWordIdx] = useState(-1);
  const [seconds, setSeconds] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[] | null>(synth ? null : []);
  const runId = useRef(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!synth) return;
    const load = () => {
      const list = synth.getVoices();
      if (list.length) setVoices(list);
    };
    load();
    synth.addEventListener('voiceschanged', load);
    // Some browsers never fire voiceschanged when there are no voices at all.
    const giveUp = window.setTimeout(() => setVoices((v) => v ?? []), 2000);
    return () => {
      synth.removeEventListener('voiceschanged', load);
      window.clearTimeout(giveUp);
    };
  }, []);

  const voice = useMemo(() => (voices ? pickVoice(voices, lang) : undefined), [voices, lang]);

  const stop = useCallback(() => {
    runId.current++;
    cancelAnimationFrame(frame.current);
    synth?.cancel();
    setStatus('idle');
    setWordIdx(-1);
    setSeconds(0);
  }, []);

  // Stop when the text changes (language switch) and on unmount.
  useEffect(() => stop, [stop, sentences]);

  const play = useCallback(() => {
    stop();
    const id = runId.current;
    const t0 = performance.now();
    let spoken = -1;
    let boundarySeen = false;
    let started = false;
    let speechDone = !voice || !synth;

    const finish = () => {
      if (runId.current !== id) return;
      runId.current++;
      cancelAnimationFrame(frame.current);
      setStatus('done');
      setWordIdx(words.length);
    };

    if (voice && synth) {
      const firstWord = sentences.map((_, s) => words.findIndex((w) => w.sentence === s));
      sentences.forEach((sentence, s) => {
        const u = new SpeechSynthesisUtterance(sentence);
        u.voice = voice;
        u.lang = voice.lang;
        u.onstart = () => {
          started = true;
        };
        u.onboundary = (e) => {
          if (runId.current !== id || (e.name && e.name !== 'word')) return;
          boundarySeen = true;
          let i = firstWord[s];
          while (i + 1 < words.length && words[i + 1].sentence === s && words[i + 1].index <= e.charIndex) i++;
          spoken = i;
        };
        u.onerror = () => {
          speechDone = true;
        };
        if (s === sentences.length - 1) {
          u.onend = () => {
            speechDone = true;
            if (boundarySeen || performance.now() - t0 >= total) finish();
          };
        }
        synth.speak(u);
      });
    }

    const tick = () => {
      if (runId.current !== id) return;
      const ms = performance.now() - t0;
      if (!started && ms > START_TIMEOUT_MS) speechDone = true;

      let idx = spoken;
      if (!boundarySeen) {
        idx = 0;
        while (idx + 1 < words.length && words[idx + 1].at <= ms) idx++;
      }
      setWordIdx(idx);
      setSeconds(Math.floor(ms / 1000));

      // The hard cap covers voices that start speaking but never fire onend.
      if ((ms >= total && speechDone) || ms > total * 2.5) return finish();
      frame.current = requestAnimationFrame(tick);
    };

    setStatus('playing');
    frame.current = requestAnimationFrame(tick);
  }, [stop, voice, sentences, words, total]);

  return {
    words,
    totalSeconds: Math.round(total / 1000),
    status,
    wordIdx,
    seconds,
    /** null while the browser is still loading its voice list */
    hasVoice: voices === null ? null : Boolean(voice),
    play,
    stop,
  };
}
