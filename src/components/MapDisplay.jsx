import ToolTip from './ToolTip';
import { useState, useEffect, useCallback } from 'react';
import { Map, Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapDisplay(props) {
  const [geoData, setGeoData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null); // Added this back
  const [labelLayerId, setLabelLayerId] = useState(null);

// I found that this was a better way to load the data (instead of importing it)
  useEffect(() => {
    fetch('https://emilydugmore.github.io/RSA_Service_Delivery_Map/simple_municipal_service_delivery_2022.json') 
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Error loading map:", err));
  }, []);

  // This code allows the labels of the base map to come up ontop of the municipality layer
  const onMapLoad = (e) => {
    const map = e.target;
    const layers = map.getStyle().layers;
    const firstLabelLayer = layers.find(layer => layer.type === 'symbol');
    if (firstLabelLayer) {
      setLabelLayerId(firstLabelLayer.id);
    }
  };

  // This tracks which feature (polygon/Municipality) the user is hovering over
  const onHover = useCallback((event) => {
    const { features } = event;
    const hoveredFeature = features && features[0];
    setHoverInfo(hoveredFeature ? { feature: hoveredFeature } : null);
  }, []);

  // Styling for the chloropleth map 
  const municipalityLayerStyle = {
    id: 'municipality-layer',
    type: 'fill',
    paint: {
      'fill-color': [
        'match',
        ['get', 'service_delivery_status'],
        'Very Poor', '#ff0000',
        'Poor', '#ffa500',
        'Substandard', '#ffff00',
        'Moderate', '#90ee90',
        'High Performance', '#2e9e2eff',
        '#cccccc'
      ],
      'fill-outline-color': '#ffffff',
      'fill-opacity': 0.8 
    }
  };

// Legend styles for the map
const Legend = () => {
  const categories = [
    { label: 'High', color: '#2e9e2eff' },
    { label: 'Moderate', color: '#90ee90' },
    { label: 'Substandard', color: '#ffff00' },
    { label: 'Poor', color: '#ffa500' },
    { label: 'Very Poor', color: '#ff0000' },
  ];

  // Legend formatting
  return (
    <div className="absolute bottom-8 left-4 z-50 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-200 w-64">
      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
        Service Delivery Rank
      </h4>
      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center gap-4">
            <div 
              className="w-4 h-4 rounded-full border border-black/10" 
              style={{ backgroundColor: cat.color }} 
            />
            <span className="text-sm font-bold text-gray-7800">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

  return (
    <div className="relative flex-1 w-full overflow-hidden bg-gray-100">
      <Map
        initialViewState={{
          longitude: 24.5,
          latitude: -29.0,
          zoom: 5
        }}
        onLoad={onMapLoad}
        onMouseMove={onHover} 
        interactiveLayerIds={['municipality-layer']} 
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        cursor={hoverInfo ? 'pointer' : 'grab'}
      >
        {geoData && (
          <Source id="municipality-data" type="geojson" data={geoData}>
            <Layer {...municipalityLayerStyle} beforeId={labelLayerId} />
          </Source>
        )}
      </Map>
      <Legend />
      
      {/* ToolTip stats bar position fixed in the top-right */}
      <div className="absolute top-4 right-4 z-50 pointer-events-none">
        <ToolTip feature={hoverInfo?.feature} />
      </div>
    </div>
  );
}