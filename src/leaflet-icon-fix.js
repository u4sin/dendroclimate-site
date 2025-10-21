import L from 'leaflet';

// Import images from node_modules; `?url` makes the bundler return a URL string
import marker2x from 'leaflet/dist/images/marker-icon-2x.png?url';
import marker   from 'leaflet/dist/images/marker-icon.png?url';
import shadow   from 'leaflet/dist/images/marker-shadow.png?url';

// Disable Leaflet's default (broken in bundles) URL getter
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: shadow,
});
