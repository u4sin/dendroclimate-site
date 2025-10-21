export default function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <h2>{title}</h2>}
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
