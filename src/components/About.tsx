import { useLang } from '../i18n';
import { Section } from './Section';

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <Section id="about" title={a.title}>
      <p className="lead">{a.lead}</p>
      <div className="about__story">
        {a.story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <h3 className="sub-title about__block">{a.principlesTitle}</h3>
      <ul className="ruled-grid">
        {a.principles.map((p) => (
          <li key={p.title} className="ruled-item">
            <h4 className="ruled-item__title">{p.title}</h4>
            <p className="ruled-item__text">{p.text}</p>
          </li>
        ))}
      </ul>

      <div className="about__facts about__block">
        <div>
          <h3 className="sub-title">{a.recordTitle}</h3>
          <ul className="rows">
            {a.record.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="about__side">
          <div>
            <h3 className="sub-title">{a.lookingTitle}</h3>
            <ul className="dots">
              {a.looking.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sub-title">{a.languagesTitle}</h3>
            <dl className="pairs">
              {a.languages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="sub-title">{a.educationTitle}</h3>
            <p>{a.education.course}</p>
            <p className="muted">{a.education.dates}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
