import { Link } from "react-router-dom";
import { asset } from "../lib/asset.js";
import Icon from "./Icon.jsx";

// A single project card. Extracted from Projects so the carousel can render
// many of them without repeating the markup.
//
// The whole card is clickable via the "stretched link" pattern: the title
// link carries a ::after overlay that covers the card (see .card-title-link in
// global.css), so a click anywhere navigates to the project. The Live/Code
// links sit above that overlay (.card-links has a higher z-index) so they stay
// independently clickable — this keeps a single real <a> for the card instead
// of nesting anchors, which is invalid HTML.
export default function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.image && (
        <img
          className="card-image"
          src={asset(project.image)}
          alt={project.name}
          loading="lazy"
        />
      )}
      <div className="card-body">
        <h3 className="card-title">
          <Link className="card-title-link" to={`/projects/${project.slug}`}>
            {project.name}
          </Link>
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
          <span className="card-cta">
            View project
            <Icon name="arrow-right" size={15} />
          </span>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              <Icon name="external" size={15} />
              Live
            </a>
          )}
          {project.links?.source && (
            <a href={project.links.source} target="_blank" rel="noreferrer">
              <Icon name="github" size={15} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
