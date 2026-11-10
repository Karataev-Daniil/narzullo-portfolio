import logo from '../assets/lunaravox-logo.png';
import type { PressItem } from '../content';
import { useLang } from '../i18n';
import { ExternalLink, Section, Stack } from './Section';

function Press({ title, items, newTab }: { title: string; items: PressItem[]; newTab: string }) {
  return (
    <div className="press">
      <h4 className="sub-title sub-title--small">{title}</h4>
      <ul>
        {items.map((p) => (
          <li key={p.href}>
            <a className="press__link" href={p.href} target="_blank" rel="noopener noreferrer">
              <span className="press__source">{p.source}</span>
              <span className="press__title">{p.title}</span>
              <span className="visually-hidden"> ({newTab})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const { lunara, toy } = p;

  return (
    <Section id="projects" title={p.title}>
      <p className="lead">{p.lead}</p>

      <article className="feature">
        <header className="feature__head">
          <img className="feature__logo" src={logo} alt="" width={56} height={56} />
          <div>
            <h3 className="feature__name">{lunara.name}</h3>
            <p className="feature__tagline">{lunara.tagline}</p>
          </div>
        </header>
        <p className="feature__summary">{lunara.summary}</p>

        <h4 className="sub-title sub-title--small">{lunara.doesTitle}</h4>
        <ul className="dots dots--columns">
          {lunara.does.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <Stack label={p.stackLabel} items={lunara.stack} />
        <p className="feature__links">
          <ExternalLink href={lunara.site.href} newTab={t.newTab}>
            {lunara.site.label}
          </ExternalLink>
        </p>
        <Press title={p.pressTitle} items={lunara.press} newTab={t.newTab} />
      </article>

      <article className="feature">
        <header className="feature__head">
          <div>
            <h3 className="feature__name">{toy.name}</h3>
            <p className="feature__tagline">{toy.tagline}</p>
          </div>
        </header>
        <p className="feature__summary">{toy.summary}</p>

        <h4 className="sub-title sub-title--small">{toy.pipelineTitle}</h4>
        <ol className="pipe">
          {toy.pipeline.map((step) => (
            <li key={step.name} className="pipe__step" data-carries={step.carries}>
              <span className="pipe__name">{step.name}</span>
              <span className="pipe__detail">{step.detail}</span>
            </li>
          ))}
        </ol>
        <p className="pipe-legend">
          <span>
            <span className="pipe-legend__swatch pipe-legend__swatch--audio" aria-hidden="true" />
            {toy.legendAudio}
          </span>
          <span>
            <span className="pipe-legend__swatch pipe-legend__swatch--text" aria-hidden="true" />
            {toy.legendText}
          </span>
        </p>
        <Stack label={p.stackLabel} items={toy.stack} />
        <Press title={p.pressTitle} items={toy.press} newTab={t.newTab} />
      </article>

      <h3 className="sub-title">{p.moreTitle}</h3>
      <ul className="ruled-grid ruled-grid--two">
        {p.more.map((m) => (
          <li key={m.name} className="ruled-item">
            <h4 className="ruled-item__title">{m.name}</h4>
            <p className="ruled-item__text">{m.text}</p>
            <Stack label={p.stackLabel} items={m.stack} />
          </li>
        ))}
      </ul>
      <p className="projects__github">
        <ExternalLink href={p.github.href} newTab={t.newTab}>
          {p.github.label}
        </ExternalLink>
      </p>
    </Section>
  );
}
