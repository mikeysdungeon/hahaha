import { achievements } from "../content";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";

export default function Achievements({ id, title }) {
  if (!achievements.length) return null;
  return (
    <Section id={id} title={title}>
      <ul className="achievement-list">
        {achievements.map((item) => (
          <li className="achievement" key={item.title}>
            <div className="achievement-header">
              <h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                    <Icon name="external" size={14} />
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <span className="achievement-meta">
                {item.issuer}
                {item.date ? ` · ${item.date}` : ""}
              </span>
            </div>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
