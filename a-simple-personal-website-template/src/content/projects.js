// ---------------------------------------------------------------------------
// Projects. `featured: true` sorts a project to the front and adds a badge.
// `links` entries are optional — omit any you don't have.
// `image` is optional: put the file in /public and use e.g. "/project.png".
// ---------------------------------------------------------------------------

export const projects = [
  {
    name: "Signal Deck",
    description:
      "A real-time dashboard for monitoring distributed systems, with anomaly detection and alerting built in. Handles 10k metrics/sec on a single node.",
    tags: ["React", "WebSockets", "Go", "TimescaleDB"],
    links: {
      demo: "https://example.com",
      source: "https://github.com/yourhandle/signal-deck",
    },
    image: "",
    featured: true,
  },
  {
    name: "Papertrail",
    description:
      "An open-source CLI that turns messy research notes into a searchable, linked knowledge base. 1.2k stars on GitHub.",
    tags: ["Rust", "SQLite", "CLI"],
    links: {
      source: "https://github.com/yourhandle/papertrail",
    },
    image: "",
    featured: false,
  },
  {
    name: "Wander",
    description:
      "A mobile-first trip planner that builds day-by-day itineraries from a list of places, optimising walking routes between stops.",
    tags: ["React Native", "Maps API", "Node.js"],
    links: {
      demo: "https://example.com",
    },
    image: "",
    featured: false,
  },
];
