import { media } from "../content";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";

export default function Media({ id, title }) {
  if (!media.length) return null;
  return (
    <Section id={id} title={title}>
      <div className="card-grid">
        {media.map((item) => (
          <article className="card" key={item.title}>
            <div className="card-body">
              <div className="media-meta">
                <span className="badge">{item.type}</span>
                {item.date && <span className="card-date">{item.date}</span>}
              </div>
              <h3 className="card-title">
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                  <Icon name="external" size={14} />
                </a>
              </h3>
              {item.description && (
                <p className="card-text">{item.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
