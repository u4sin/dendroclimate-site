import { useRef, useState } from 'react';

export default function AudioPlayer({ src, label = "Play" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  return (
    <div className="card" style={{ padding: 16 }}>
      <audio ref={audioRef} src={src} preload="none" />
      <button className="btn" onClick={toggle} aria-pressed={playing}>
        {playing ? "Pause" : label}
      </button>
      <span style={{ marginLeft: 12, color: '#9aa2b2' }}>
        {playing ? "Playing river sounds…" : "Press to hear river sounds"}
      </span>
    </div>
  );
}
