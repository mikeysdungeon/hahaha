import { profile } from "../content";
import Icon from "./Icon.jsx";

export default function SocialLinks() {
  if (!profile.socials?.length) return null;
  return (
    <ul className="socials">
      {profile.socials.map(({ label, url, icon }) => (
        <li key={label}>
          {/* The label is visible text rather than an aria-label: a bare icon
              is a guessing game for sighted users too, and screen readers
              still get the name for free. */}
          <a className="social-link" href={url} target="_blank" rel="noreferrer">
            <Icon name={icon} size={17} />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
