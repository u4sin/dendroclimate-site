export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div>© {new Date().getFullYear()} Pushpendra Pandey | Climate Science Research</div>
      </div>
    </footer>
  );
}
