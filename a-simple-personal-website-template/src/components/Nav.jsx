import { features, profile, sections } from "../content";
import { useTheme } from "../hooks/useTheme.js";
import Icon from "./Icon.jsx";

export default function Nav() {
  const [theme, toggle] = useTheme();

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        {features.themeToggle && (
          <button
            className="icon-button"
            type="button"
            onClick={toggle}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
        )}
      </div>
    </header>
  );
}
