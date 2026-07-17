import { projects } from "../content";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";

export default function Projects({ id, title }) {
  if (!projects.length) return null;
  const sorted = [...projects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <Section id={id} title={title}>
      <div className="card-grid">
        {sorted.map((project) => (
          <article className="card" key={project.name}>
            {project.image && (
              <img
                className="card-image"
                src={project.image}
                alt={project.name}
                loading="lazy"
              />
            )}
            <div className="card-body">
              <h3 className="card-title">
                {project.name}
                {project.featured && <span className="badge">Featured</span>}
              </h3>
              <p className="card-text">{project.description}</p>
              {project.tags?.length > 0 && (
                <ul className="chips">
                  {project.tags.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <div className="card-links">
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    <Icon name="external" size={15} />
                    Live
                  </a>
                )}
                {project.links?.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="github" size={15} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
