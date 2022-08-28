import { CSSProperties, useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../../types/offer';
import { City } from '../../../types/city';
import useMap from '../../../hooks/use-map';
import { MapClass, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../const';
import { ActiveOfferType } from '../../molecules/main-content/main-content';

type MapProps = {
  points: Offer[];
  city: City;
  activePointId: ActiveOfferType;
  style?: CSSProperties;
  className?: string;
};

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const selectedIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ points, city, activePointId, style, className = MapClass.City }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(point.id === activePointId ? selectedIcon : defaultIcon);

        marker.addTo(map);
      });
    }
  }, [activePointId, map, points]);

  return <section className={`${className} map`} ref={mapRef} style={style}></section>;
}
