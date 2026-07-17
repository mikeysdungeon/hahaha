// ---------------------------------------------------------------------------
// Site configuration: global settings, feature flags, and section layout.
// ---------------------------------------------------------------------------

export const site = {
  title: "Alex Doe — Portfolio", // browser tab title
  description: "Portfolio of Alex Doe — projects, experience, and more.",
};

// Feature flags. Flip to false to disable a feature everywhere.
export const features = {
  themeToggle: true, // light/dark switch in the nav
};

// Sections, in display order. This single list drives both the page layout
// and the nav links: remove (or comment out) a line to hide a section,
// reorder lines to reorder the page, edit `label` to rename it.
// Each `id` must match a key in the section registry (src/App.jsx).
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];
