import { MouseEventHandler } from 'react';

type CityTabProps = {
  city: string;
  isActive: boolean,
  onClick: MouseEventHandler;
};

export default function CityTab({city, isActive, onClick} : CityTabProps) {
  return (
    <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href={`#${city}`} onClick={onClick}>
      <span>{city}</span>
    </a>
  );
}
