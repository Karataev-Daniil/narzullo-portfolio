import { useEffect, useState } from 'react';
import { useLang } from '../i18n';
import { Section } from './Section';

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t.skills.title}>
      <dl className="skills">
        {t.skills.groups.map((g) => (
          <div key={g.name} className="skills__row">
            <dt className="skills__group">{g.name}</dt>
            <dd className="skills__items">{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [copy, setCopy] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (copy === 'idle') return;
    const id = window.setTimeout(() => setCopy('idle'), 2500);
    return () => window.clearTimeout(id);
  }, [copy]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopy('copied');
    } catch {
      setCopy('failed');
    }
  };

  return (
    <Section id="contact" title={c.title}>
      <p className="contact__statement">{c.statement}</p>
      <p className="contact__lead">{c.lead}</p>

      <div className="contact__email-row">
        <a className="contact__email" href={`mailto:${c.email}`}>
          {c.email}
        </a>
        <button type="button" className="btn btn--ghost btn--small" onClick={copyEmail}>
          {c.copy}
        </button>
        <span className="contact__status" role="status">
          {copy === 'copied' ? c.copied : copy === 'failed' ? c.copyFailed : ''}
        </span>
      </div>

      <dl className="channels">
        {c.channels.map((ch) => (
          <div key={ch.label} className="channels__row">
            <dt>{ch.label}</dt>
            <dd>
              <a
                className="link"
                href={ch.href}
                {...(ch.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {ch.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
