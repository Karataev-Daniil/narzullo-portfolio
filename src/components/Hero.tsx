import type { CSSProperties } from 'react';
import portrait from '../assets/portrait-720.webp';
import { useLang } from '../i18n';
import { useIntroPlayer, type Word } from '../useIntroPlayer';
import { NameSignal } from './NameSignal';

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Bar height per word: longer words are louder, with a little stable jitter.
function barHeight(word: Word) {
  const letters = word.text.replace(/[^\p{L}\p{N}]/gu, '').length;
  let hash = 0;
  for (const ch of word.text) hash = (hash * 31 + ch.charCodeAt(0)) % 997;
  return Math.min(1, 0.22 + 0.62 * Math.min(1, letters / 10) + (hash / 997) * 0.16);
}

export function Hero() {
  const { lang, t } = useLang();
  const h = t.hero;
  const player = useIntroPlayer(h.intro, lang);
  const playing = player.status === 'playing';

  const wordState = (i: number) => {
    if (!playing) return '';
    if (i < player.wordIdx) return 'is-past';
    if (i === player.wordIdx) return 'is-current';
    return '';
  };

  return (
    <section className="hero wrap" aria-labelledby="hero-name">
      <div className="hero__main">
        <p className="hero__status">
          <span className="hero__available">{h.available}</span>
          <span>{h.place}</span>
        </p>

        <h1 id="hero-name" className="name" aria-label={h.name.join(' ')}>
          <NameSignal lines={h.name} active={playing} />
        </h1>

        <div className="voice">
          <button
            type="button"
            className="voice__play"
            onClick={playing ? player.stop : player.play}
            aria-label={playing ? h.stop : h.play}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <span className="voice__wave" aria-hidden="true">
            {player.words.map((w, i) => (
              <span
                key={i}
                className={i < player.wordIdx ? 'is-played' : i === player.wordIdx && playing ? 'is-current' : ''}
                style={{ '--h': barHeight(w) } as CSSProperties}
              />
            ))}
          </span>
          <span className="voice__time">{formatTime(playing ? player.seconds : player.totalSeconds)}</span>
        </div>
        <p className="voice__note">{player.hasVoice === false ? h.noVoice : h.voiceNote}</p>

        <p className={`transcript${playing ? ' is-playing' : ''}`}>
          {player.words.map((w, i) => (
            <span key={i}>
              <span className={`transcript__word ${wordState(i)}`}>{w.text}</span>{' '}
            </span>
          ))}
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">
            {h.ctaWork}
          </a>
          <a className="btn btn--ghost" href="#contact">
            {h.ctaContact}
          </a>
        </div>
      </div>

      <figure className="hero__portrait">
        <img src={portrait} alt={h.portraitAlt} width={720} height={1080} fetchPriority="high" />
      </figure>
    </section>
  );
}
