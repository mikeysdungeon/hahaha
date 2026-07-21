// ---------------------------------------------------------------------------
// Who you are: hero, about, contact details, and social links.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Isa Mukaramov",
  role: "Mechanical Engineer → Software Engineer",
  tagline:
    "I turn ambiguous requirements into structured, tested and practical solutions, with an engineering mindset applied to software.",
  location: "Sydney, NSW",
  email: "isa.mukaramov2000@gmail.com",

  // Optional. Put files in /public and reference them by absolute path,
  // e.g. avatar: "/avatar.jpg", resumeUrl: "/resume.pdf". Empty string hides them.
  avatar: "",
  resumeUrl: "",

  // Paragraphs for the About section. Add or remove freely.
  about: [
    "I'm a Mechanical Engineering graduate transitioning into software engineering. My background is in converting ambiguous customer requirements into structured, tested and practical technical solutions, work that turns out to translate directly to building software.",
    "I bring a systems-oriented approach to problem solving: decomposing requirements, developing iteratively, analysing failures, validating against data, and documenting decisions so the reasoning behind them survives. I'm currently building applications in Python and TypeScript.",
  ],

  // Shown in the Contact section above the email button.
  contactBlurb:
    "I'm always happy to talk about interesting projects, opportunities, or just to say hi. The fastest way to reach me is email.",

  // Social links. `icon` is one of: github, linkedin, x, mail, globe
  // (see src/components/Icon.jsx — add your own there if needed).
  socials: [
    { label: "GitHub", url: "https://github.com/mikeysdungeon", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/isa-mukaramov/",
      icon: "linkedin",
    },
  ],
};
