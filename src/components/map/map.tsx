import { useEffect, useRef } from 'react';
import { City, Offers, IconUrl, IconProperties} from '../../types';
import useMap from '../../hooks/useMap';
import L from 'leaflet';

type MapProps = {
  offers: Offers;
  city: City;
  selectedCard: string;
  iconUrl: IconUrl;
  iconProperties: IconProperties;
  mapTitleLayer: string;
  mapAttribution: string;
}

export default function Map ({city, offers, selectedCard, iconUrl, iconProperties, mapTitleLayer, mapAttribution}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city, mapTitleLayer, mapAttribution});


  const defaultCustomIcon = L.icon({
    iconUrl: iconUrl.defaultUrl,
    iconSize: iconProperties.iconSize,
    iconAnchor: iconProperties.iconAnchor,
  });

  const currentCustomIcon = L.icon({
    iconUrl: iconUrl.currentUrl,
    iconSize: iconProperties.iconSize,
    iconAnchor: iconProperties.iconAnchor,
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        L.marker({
          lat: offer.coordinates.latitude,
          lng: offer.coordinates.longitude
        }, {
          icon: (offer.id === selectedCard) ? currentCustomIcon : defaultCustomIcon,
        }).addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, offers, selectedCard]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{height: '600px', width: `${100}%`}}
    >
    </section>
  );
}
