# Narzullo Zugurov — portfolio

One-page portfolio in React + Vite + TypeScript, in English and Russian.

The hero is a voice message: press play and the browser's speech engine reads the
intro aloud (Web Speech API). Words in the transcript light up as they are spoken,
the waveform has one bar per word, and the letters of the name change weight with
the voice. Without a voice for the current language the transcript plays silently.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Where things live

- `src/content.ts` — all text in both languages (experience, projects, contacts)
- `src/useIntroPlayer.ts` — speech playback and word timing
- `src/components/NameSignal.tsx` — the animated name
- `src/styles.css` — design tokens at the top, light and dark themes

Fonts: Unbounded (display) and Onest (text), self-hosted via Fontsource.
