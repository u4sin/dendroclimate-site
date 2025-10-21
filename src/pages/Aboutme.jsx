import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { aboutme } from '../data.js';
import { collaborators } from '../data.js';

export default function Aboutme() {
  return (
    <Section
      title="Pushpendra Pandey"
      lead="PhD Candidate, Birbal Sahni Institute of Palaeosciences (BSIP), Lucknow, India"
    >
      {/* Research description */}
      <p className="about-text">
        My research integrates dendroclimatology, climate modeling, and atmospheric circulation studies
        to understand hydroclimate variability in the Western Himalayas. I combine tree-ring data with
        observational records and climate simulations to reconstruct long-term precipitation histories
        and investigate the dynamics of Western Disturbances. These insights help assess how large-scale
        teleconnections and future warming will impact regional water security.
      </p>

      {/* Collaborators */}
      <h3 className="collab-heading">Collaborators</h3>
      <ul className="collab-list space-y-2">
        {collaborators.map((p) => (
          <li key={p.name}>
            {p.href ? (
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                className="font-semibold underline-offset-2 hover:underline hover:text-primary">
                {p.name}
              </a>
            ) : (
              <span className="font-semibold">{p.name}</span>
            )}
            <span className="text-muted-foreground"> ({p.role})</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

