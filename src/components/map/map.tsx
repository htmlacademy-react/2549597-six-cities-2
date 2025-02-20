import { useEffect, useRef } from 'react';
import { City, Offers } from '../../types';
import useMap from '../../hooks/useMap';
import L from 'leaflet';

type MapProps = {
  offers: Offers;
  city: City;
  selectedCard: string;
}

export default function Map ({city, offers, selectedCard}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const defaultIconUrl = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
  const currentIconUrl = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

  const defaultCustomIcon = L.icon({
    iconUrl: defaultIconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = L.icon({
    iconUrl: currentIconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        L.marker({
          lat: offer.coordinates.latitude,
          lng: offer.coordinates.longitude
        }, {
          icon: offer.id === selectedCard ? currentCustomIcon : defaultCustomIcon,
        }).addTo(map);
      });
    }
  });

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{height: '600px', width: `${100}%`}}
    >
    </section>
  );
}
