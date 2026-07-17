import { profile } from "../content";
import Section from "./Section.jsx";

export default function About({ id, title }) {
  if (!profile.about?.length) return null;
  return (
    <Section id={id} title={title}>
      <div className="prose">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
