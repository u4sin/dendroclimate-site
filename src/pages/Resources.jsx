import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { resources } from '../data.js';

export default function Resources() {
  return (
    <Section title="Resources" lead="Data, code, and links.">
      <div className="grid">
        {resources.map(r => (
          <div key={r.id} className="card" style={{ gridColumn: 'span 6' }}>
            <Card title={r.title} desc={r.desc} footer={<a className="btn" href={r.href}>Open</a>} />
          </div>
        ))}
      </div>
    </Section>
  );
}
