import { renderHook } from '@testing-library/react';
import useMap from './useMap';
import { CITIES } from '../constants';
import { RefObject } from 'react';

vi.mock('leaflet', () => {
  const mockMapInstance = {
    setView: vi.fn(),
    addTo: vi.fn(),
  };

  return {
    default: {
      map: vi.fn(() => mockMapInstance),
      tileLayer: vi.fn(() => ({
        addTo: vi.fn(),
      })),
    },
  };
});

describe('Hook: useMap', () => {
  const city = CITIES[0];

  it('should return Map', () => {
    const mapRef = <div></div> as unknown as RefObject<HTMLDivElement>;
    const { result } = renderHook(() => useMap({mapRef, city}));

    expect(result).toHaveBeenCalledWith(mapRef.current, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude,
      }
    });
  });
});
// что вообще тут писать не ясно, если честно. В интеренете нашёл какой-то пример,
// у GPT спросил, как вообще можно протестить карту.
// Понимаю, что нужно проверить что возвращается тип Map, к примеру, но как
