// Shared wrapper that gives every section its anchor id, heading, and
// consistent spacing. Wrap any new section's content in this.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
