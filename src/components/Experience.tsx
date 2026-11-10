import { useState } from 'react';
import { useLang } from '../i18n';
import { ExternalLink, Section, Stack } from './Section';

export function Experience() {
  const { t } = useLang();
  const x = t.experience;
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <Section id="experience" title={x.title}>
      <p className="lead">{x.lead}</p>
      <ol className="timeline">
        {x.jobs.map((job, i) => {
          const isOpen = open.has(i);
          const [summary, ...rest] = job.points;
          return (
            <li key={job.role + job.org} className="job">
              <p className="job__meta">
                <span>{job.dates}</span>
                <span>{job.kind}</span>
              </p>
              <h3 className="job__role">{job.role}</h3>
              <p className="job__org">
                {job.url ? (
                  <ExternalLink href={job.url} newTab={t.newTab}>
                    {job.org}
                  </ExternalLink>
                ) : (
                  job.org
                )}
              </p>
              <p className="job__summary">{summary}</p>

              {rest.length > 0 && (
                <>
                  <div id={`job-${i}`} className={`job__more${isOpen ? ' is-open' : ''}`} inert={!isOpen}>
                    <div>
                      <ul className="job__points">
                        {rest.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="job__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`job-${i}`}
                    onClick={() => toggle(i)}
                  >
                    {isOpen ? x.hide : x.show}
                    <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                      <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </button>
                </>
              )}
              <Stack label={x.stackLabel} items={job.stack} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
