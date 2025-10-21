import ReactPlayer from 'react-player';

export default function VideoEmbed({ url }) {
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}
