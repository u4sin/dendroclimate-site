// src/components/ImageGrid.jsx
export default function ImageGrid({ items }) {
  return (
    <div className="gallery one-at-a-time">
      {items.map((it) => (
        <figure key={it.id} className="image-card">
          <img className="image" src={it.img} alt={it.caption} />
          {it.caption && (
            <figcaption className="caption">{it.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
