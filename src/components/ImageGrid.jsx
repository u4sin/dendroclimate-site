export default function ImageGrid({ items }) {
  return (
    <div className="grid">
      {items.map((it, i) => (
        <figure key={it.id} className="card" style={{ gridColumn: `span ${i % 1 === 0 ? 4 : 2}` }}>
          <img className="image" src={it.img} alt={it.caption} />
          {it.caption && <figcaption className="card-body caption">{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
