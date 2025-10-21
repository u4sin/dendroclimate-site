// Optional: remove if you don’t want maps
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function WorldMap({ points = [] }) {
  return (
    <div className="card" style={{ padding: 8 }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: 360, width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map(p => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>{p.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
