import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type CityTabProps = {
  city: string;
  isActive: boolean;
  onClick: MouseEventHandler;
};

export default function CityTab({ city, isActive, onClick }: CityTabProps) {
  return (
    <Link
      className={`locations__item-link tabs__item ${
        isActive && 'tabs__item--active'
      }`}
      to={`?city=${city}`}
      data-city={city}
      onClick={onClick}
    >
      <span data-city={city}>{city}</span>
    </Link>
  );
}
