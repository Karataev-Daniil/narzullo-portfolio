import type { ReactNode } from 'react';

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section__grid wrap">
        <div className="section__head">
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        </div>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}

export function Stack({ label, items }: { label: string; items: string[] }) {
  return (
    <p className="stack">
      <span className="stack__label">{label}:</span> {items.join(', ')}
    </p>
  );
}

export function ExternalLink({ href, children, newTab }: { href: string; children: ReactNode; newTab: string }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <svg className="link__icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <path d="M5 3h8v8M13 3 3.5 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="visually-hidden"> ({newTab})</span>
    </a>
  );
}
