import { profile } from "../content";
import Icon from "./Icon.jsx";

export default function SocialLinks() {
  if (!profile.socials?.length) return null;
  return (
    <ul className="socials">
      {profile.socials.map(({ label, url, icon }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon name={icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
