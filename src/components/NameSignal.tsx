import { useEffect, useRef } from 'react';

const BASE_WEIGHT = 500;
const SWING = 300;

/**
 * The name set in a variable font. While the intro plays, every letter's
 * weight follows a travelling wave, so the name moves like a voice signal.
 * On load it runs one short sweep that settles back to the base weight.
 */
export function NameSignal({ lines, active }: { lines: readonly string[]; active: boolean }) {
  const letters = useRef<HTMLSpanElement[]>([]);
  const amp = useRef(0);
  const swept = useRef(false);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let cancelled = false;

    const step = (now: number) => {
      const target = active ? 1 : 0;
      amp.current += (target - amp.current) * (active ? 0.12 : 0.045);
      const t = now / 1000;
      letters.current.forEach((el, i) => {
        if (!el) return;
        const wave = Math.sin(t * 7 - i * 0.75) * 0.6 + Math.sin(t * 13.3 + i * 1.9) * 0.4;
        el.style.fontWeight = String(Math.round(BASE_WEIGHT + SWING * amp.current * wave));
      });
      if (active || amp.current > 0.004) {
        raf = requestAnimationFrame(step);
      } else {
        amp.current = 0;
        letters.current.forEach((el) => el && (el.style.fontWeight = ''));
      }
    };

    if (!swept.current && !active) {
      // One sweep on first paint, after the font is in, so the motion is visible.
      swept.current = true;
      document.fonts.ready.then(() => {
        if (cancelled) return;
        amp.current = 1;
        raf = requestAnimationFrame(step);
      });
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [active]);

  let n = 0;
  return (
    <span aria-hidden="true">
      {lines.map((line) => (
        <span key={line} className="name__line">
          {[...line].map((ch, i) => {
            const k = n++;
            return (
              <span
                key={i}
                ref={(el) => {
                  if (el) letters.current[k] = el;
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
