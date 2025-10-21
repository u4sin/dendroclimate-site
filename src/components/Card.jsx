export default function Card({ img, title, desc, footer }) {
  return (
    <div className="card">
      {img && <img src={img} alt={title} className="image" />}
      <div className="card-body">
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {footer}
      </div>
    </div>
  );
}
