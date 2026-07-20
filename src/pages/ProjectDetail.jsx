import { lazy, Suspense, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects, site } from "../content";
import { asset } from "../lib/asset.js";
import Icon from "../components/Icon.jsx";
import NotFound from "./NotFound.jsx";

// three.js is ~600 KB, so the viewer (and three) load only when a project that
// has a model is opened — never on the home page or a software project.
const StlViewer = lazy(() => import("../components/StlViewer.jsx"));

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.name} — ${site.title}`;
    return () => {
      document.title = site.title;
    };
  }, [project]);

  // An unknown slug (stale link, typo) renders the 404 rather than crashing.
  if (!project) return <NotFound />;

  return (
    <article className="project-page">
      <Link className="back-link" to="/#projects">
        <Icon name="arrow-left" size={15} />
        All projects
      </Link>

      <header className="project-header">
        <h1 className="project-title">
          {project.name}
          {project.featured && <span className="badge">Featured</span>}
        </h1>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        {project.tags?.length > 0 && (
          <ul className="chips">
            {project.tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* CAD projects lead with an interactive 3D model instead of a still. */}
      {project.model && (
        <Suspense
          fallback={<div className="stl-viewer stl-viewer--pending" />}
        >
          <StlViewer
            src={project.model.src}
            upAxis={project.model.upAxis}
            rock={project.model.rock}
            alt={`3D model of ${project.name}`}
          />
        </Suspense>
      )}

      {/* `image` is the card thumbnail. On a staged write-up it would repeat a
          photo that already appears in its own part below, so it only leads the
          page for projects without a walkthrough or a 3D model. */}
      {project.image && !project.stages && !project.model && (
        <img
          className="project-image"
          src={asset(project.image)}
          alt={project.name}
        />
      )}

      <div className="project-body">
        <p className="project-lede">{project.description}</p>

        {project.output && (
          <aside className="project-output">
            <h2 className="project-output-title">Project output</h2>
            <p>{project.output}</p>
          </aside>
        )}

        {project.detail && <p className="project-detail">{project.detail}</p>}

        {/* Rich walkthrough (stages → parts). Projects without `stages` fall
            back to the simple `highlights` list below. */}
        {project.stages?.map((stage) => (
          <section className="project-stage" key={stage.title}>
            <h2 className="project-section-title">{stage.title}</h2>
            <ol className="part-list">
              {stage.parts.map((part) => (
                <li className="part" key={part.title}>
                  <div className="part-head">
                    {part.label && (
                      <span className="part-label">{part.label}</span>
                    )}
                    <h3 className="part-title">{part.title}</h3>
                  </div>
                  {part.image && (
                    <img
                      className="part-image"
                      src={asset(part.image)}
                      alt={part.alt || part.title}
                      loading="lazy"
                    />
                  )}
                  <p className="part-body">{part.body}</p>
                  {part.bullets?.length > 0 && (
                    <ul className="highlights">
                      {part.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}

        {!project.stages && project.highlights?.length > 0 && (
          <section className="project-highlights">
            <h2 className="project-section-title">What I did</h2>
            <ul className="highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* A standalone documentary figure (e.g. an exploded assembly drawing),
            for projects that carry one alongside the write-up. */}
        {project.figure && (
          <figure className="project-figure">
            <img
              className="project-figure-img"
              src={asset(project.figure.src)}
              alt={project.figure.alt || project.name}
              loading="lazy"
            />
            {project.figure.caption && (
              <figcaption className="project-figure-caption">
                {project.figure.caption}
              </figcaption>
            )}
          </figure>
        )}

        {project.takeaways?.length > 0 && (
          <section className="project-takeaways">
            <h2 className="project-section-title">What this demonstrates</h2>
            <div className="takeaway-grid">
              {project.takeaways.map((t) => (
                <div className="takeaway" key={t.title}>
                  <h3 className="takeaway-title">{t.title}</h3>
                  <p className="takeaway-body">{t.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(project.links?.demo || project.links?.source) && (
          <div className="card-links">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                <Icon name="external" size={15} />
                Live
              </a>
            )}
            {project.links.source && (
              <a href={project.links.source} target="_blank" rel="noreferrer">
                <Icon name="github" size={15} />
                Code
              </a>
            )}
          </div>
        )}

        {project.attachments?.length > 0 && (
          <section className="project-attachments">
            <h2 className="project-section-title">Downloads</h2>
            <ul className="attachment-list">
              {project.attachments.map((att) => (
                <li key={att.file}>
                  {/* Opens in a new tab so the browser's PDF viewer can show it;
                      the viewer's own control handles saving a copy. */}
                  <a
                    className="attachment"
                    href={asset(att.file)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="download" size={18} />
                    <span className="attachment-text">
                      <span className="attachment-label">{att.label}</span>
                      {att.note && (
                        <span className="attachment-note">{att.note}</span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
