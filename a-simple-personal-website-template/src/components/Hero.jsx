import { profile } from "../content";
import Icon from "./Icon.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      {profile.avatar && (
        <img
          className="hero-avatar"
          src={profile.avatar}
          alt={profile.name}
          width="96"
          height="96"
        />
      )}
      <p className="hero-kicker">{profile.role}</p>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      {profile.location && (
        <p className="hero-location">
          <Icon name="pin" size={14} />
          {profile.location}
        </p>
      )}
      <div className="hero-actions">
        {profile.email && (
          <a className="button primary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        )}
        {profile.resumeUrl && (
          <a
            className="button"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="download" size={16} />
            Résumé
          </a>
        )}
      </div>
      <SocialLinks />
    </section>
  );
}
