import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
import WorldMap from '../components/WorldMap.jsx';
import StatStrip from '../components/StatStrip.jsx';
import { hero, highlights, gallery, stats } from '../data.js';

export default function Home() {
  return (
    <>
      <Hero {...hero} />
      <Section id="research" title="What we do, and why"
        lead="From backyards to faraway moons, river systems and climate shape surfaces over geologic time.">
        <div className="grid">
          {highlights.map(h => (
            <div key={h.id} className="card" style={{ gridColumn: 'span 6' }}>
              <Card img={h.img} title={h.title} desc={h.desc} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="audio" title="Press play for river sounds">
        <AudioPlayer src="https://www2.cs.uic.edu/~i101/SoundFiles/Water.wav" label="Play river sounds" />
      </Section>

      <Section id="video" title="A short video about our work">
        <VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </Section>

      <Section id="contributions" title="Recent contributions" lead="From the laptop screen to the field.">
        <ImageGrid items={gallery} />
      </Section>

      <Section id="travel" title="Where we’ve been" lead="Field sites across the globe.">
        <WorldMap points={[
          { id: 'p1', lat: 34.05, lng: -118.25, label: 'Channel study' },
          { id: 'p2', lat: 19.07, lng: 72.88, label: 'Delta survey' },
          { id: 'p3', lat: 51.50, lng: -0.12, label: 'Terrace mapping' },
        ]} />
      </Section>

      <Section id="stats" title="By the numbers">
        <StatStrip items={stats} />
      </Section>
    </>
  );
}
