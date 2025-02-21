import { useState, useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../types';

type useMapProps = {
  mapRef: React.RefObject<HTMLDivElement>;
  city: City;
  mapTitleLayer: string;
  mapAttribution: string;
}

export default function useMap({mapRef, city, mapTitleLayer, mapAttribution}: useMapProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      L.tileLayer(
        mapTitleLayer,
        {
          attribution: mapAttribution,
        },
      ).addTo(instance);

      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city, mapTitleLayer, mapAttribution]);

  return map;
}
