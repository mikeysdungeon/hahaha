// ---------------------------------------------------------------------------
// Work experience, newest first. Dates are free-form strings, so write
// whatever reads best ("2023", "Mar 2023", "Present"...).
// All fields except company/role/start/end are optional.
// ---------------------------------------------------------------------------

export const experience = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    start: "2023",
    end: "Present",
    location: "Remote",
    summary:
      "Leading development of the customer analytics platform serving 2M+ daily events.",
    highlights: [
      "Redesigned the ingestion pipeline, cutting p95 latency from 4s to 300ms.",
      "Mentored three engineers through promotion to mid-level.",
      "Introduced contract testing, reducing cross-team integration bugs by ~60%.",
    ],
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Globex",
    role: "Software Engineer",
    start: "2020",
    end: "2023",
    location: "London, UK",
    summary:
      "Full-stack engineer on the payments team, owning checkout and reconciliation services.",
    highlights: [
      "Shipped a new checkout flow that lifted conversion by 12%.",
      "Built internal tooling used daily by 40+ support staff.",
    ],
    tech: ["Python", "Django", "React", "Redis"],
  },
];
