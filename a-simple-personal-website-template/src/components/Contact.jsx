import { profile } from "../content";
import Section from "./Section.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Contact({ id, title }) {
  return (
    <Section id={id} title={title}>
      <div className="contact">
        {profile.contactBlurb && <p className="prose">{profile.contactBlurb}</p>}
        {profile.email && (
          <a className="button primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        )}
        <SocialLinks />
      </div>
    </Section>
  );
}
