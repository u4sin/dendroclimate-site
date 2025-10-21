export default function StatStrip({ items }) {
  return (
    <div className="statstrip">
      {items.map(s => (
        <div key={s.id} className="stat">
          <div className="val">{s.val}</div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
