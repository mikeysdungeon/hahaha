import { experience } from "../content";
import Section from "./Section.jsx";

export default function Experience({ id, title }) {
  if (!experience.length) return null;
  return (
    <Section id={id} title={title}>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" key={`${job.company}-${job.start}`}>
            <div className="timeline-header">
              <h3>
                {job.role} · <span className="company">{job.company}</span>
              </h3>
              <span className="timeline-meta">
                {job.start} — {job.end}
                {job.location ? ` · ${job.location}` : ""}
              </span>
            </div>
            {job.summary && <p className="timeline-summary">{job.summary}</p>}
            {job.highlights?.length > 0 && (
              <ul className="highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {job.tech?.length > 0 && (
              <ul className="chips">
                {job.tech.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
