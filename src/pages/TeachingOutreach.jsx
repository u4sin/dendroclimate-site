import Section from '../components/Section.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
import { teachingOutreach } from '../data.js';

export default function TeachingOutreach() {
  return (
    <>
      <Section title="Courses Taught" lead="Educational offerings in planetary science and geophysics.">
        <div className="grid">
          {teachingOutreach
            .filter(item => item.type === 'Course')
            .map(item => (
              <div key={item.id} className="card" style={{ gridColumn: 'span 6' }}>
                <h3 style={{ padding: '0 16px' }}>{item.title}</h3>
                <p style={{ padding: '0 16px', color: '#9aa2b2' }}>{item.desc}</p>
                {item.media?.type === 'video' && <VideoEmbed url={item.media.url} />}
              </div>
            ))}
        </div>
      </Section>

      <Section title="Outreach & Engagement" lead="Sharing science with the public and academic community.">
        <div className="grid">
          {teachingOutreach
            .filter(item => item.type === 'Outreach')
            .map(item => (
              <div key={item.id} className="card" style={{ gridColumn: 'span 6' }}>
                <h3 style={{ padding: '0 16px' }}>{item.title}</h3>
                <p style={{ padding: '0 16px', color: '#9aa2b2' }}>{item.desc}</p>
                {item.media?.type === 'video' && <VideoEmbed url={item.media.url} />}
              </div>
            ))}
        </div>
      </Section>
    </>
  );
}
