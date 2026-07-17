// ---------------------------------------------------------------------------
// Who you are: hero, about, contact details, and social links.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Alex Doe",
  role: "Software Engineer",
  tagline:
    "I design and build reliable, human-friendly software — from data pipelines to polished web apps.",
  location: "London, UK",
  email: "hello@example.com",

  // Optional. Put files in /public and reference them by absolute path,
  // e.g. avatar: "/avatar.jpg", resumeUrl: "/resume.pdf". Empty string hides them.
  avatar: "",
  resumeUrl: "",

  // Paragraphs for the About section. Add or remove freely.
  about: [
    "I'm a software engineer with a focus on building products end to end — from sketching the first prototype to running it in production. I care about simple architectures, fast feedback loops, and interfaces that get out of the user's way.",
    "Outside of work you'll find me contributing to open source, writing about engineering practice, and experimenting with whatever technology looks most fun that month.",
  ],

  // Shown in the Contact section above the email button.
  contactBlurb:
    "I'm always happy to talk about interesting projects, opportunities, or just to say hi. The fastest way to reach me is email.",

  // Social links. `icon` is one of: github, linkedin, x, mail, globe
  // (see src/components/Icon.jsx — add your own there if needed).
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: "linkedin" },
    { label: "X", url: "https://x.com/yourhandle", icon: "x" },
  ],
};
