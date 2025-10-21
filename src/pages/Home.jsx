import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import WorldMap from '../components/WorldMap.jsx';
import StatStrip from '../components/StatStrip.jsx';
import { hero, highlights, gallery, stats } from '../data.js';
import { useState, useRef } from "react";


export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    };
  return (
    <div className="home-page">
      <Hero {...hero} />

      <Section id="research" title="What we do, and why"
        lead="I study how the climate has changed in the Western Himalayas over the past few centuries and what it means for our future. By analyzing the annual growth rings of Himalayan trees, we reconstruct long records of rainfall and drought. These tree-ring archives reveal stories that weather instruments cannot — showing how Western Disturbances, ocean–atmosphere patterns like El Niño, and long-term warming shape water availability in this fragile mountain region.
              Our recent work indicates that 2022 was the driest pre-monsoon season in the last 400 years, underscoring the increasing severity of climate extremes in the Himalayas. Alongside fieldwork, I use modern climate models to test predictions of droughts and extremes, bridging the past and the future of Himalayan hydroclimate.">
        <div className="grid">
          {highlights.map(h => (
            <div key={h.id} className="card-home" style={{ gridColumn: 'span 6' }}>
              <Card img={h.img} title={h.title} desc={h.desc} />
            </div>
          ))}
        </div>
      </Section>

        <Section id="audio" title="Press play for river sounds">
            <div className="video-section">
            <div className="video-wrapper">
              <video
                ref={videoRef}
                src="/videos/MountainRiver.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="river-video"
              />
              <div className="video-overlay">
                <button className="mute-btn" onClick={toggleMute}>
                  {isMuted ? "🔇 Unmute" : "🔊 Mute"}
                </button>
              </div>
            </div>
            </div>
          </Section>

      <Section id="contributions" title="Recent contributions" lead="From the laptop screen to the field.">
        <ImageGrid items={gallery} />
      </Section>

      <Section id="travel" title="Where we’ve been" lead="Field sites across the globe.">
        <WorldMap points={[
          { id: 'p1', lat: 32.75, lng: 76.75, label: 'Udaipur Expedition' },
          { id: 'p2', lat: 34.20, lng: 74.35, label: 'Kashmir Network' },
          { id: 'p3', lat: 35.93, lng: -84.31, label: 'ORNL Collaboration' },
        ]} />
      </Section>

{/*       <Section id="stats" title="By the numbers"> */}
{/*         <StatStrip items={stats} /> */}
{/*       </Section> */}
    </div>
  );
}

