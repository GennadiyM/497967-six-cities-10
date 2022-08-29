import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer, LatLng } from 'leaflet';
import { City } from '../types/offer';
import 'leaflet/dist/leaflet.css';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map
      ?.eachLayer((item) => item.remove())
      .addLayer(layer)
      .panTo(new LatLng(city.location.latitude, city.location.longitude));
  }, [mapRef, city, map]);

  return map;
}
