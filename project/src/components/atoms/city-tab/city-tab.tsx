type CityTabProps = {
  city: string;
  isActive: boolean,
  onClick: () => void;
};

export default function CityTab({city, isActive, onClick} : CityTabProps) :JSX.Element {
  return (
    <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href="#" onClick={onClick}>
      <span>{city}</span>
    </a>
  );
}
