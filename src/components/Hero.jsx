export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary, img }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          {ctaPrimary && <a className="btn" href={ctaPrimary.href}>{ctaPrimary.label}</a>}
          {ctaSecondary && <a className="btn ghost" href={ctaSecondary.href}>{ctaSecondary.label}</a>}
        </div>
      </div>
    </section>
  );
}
