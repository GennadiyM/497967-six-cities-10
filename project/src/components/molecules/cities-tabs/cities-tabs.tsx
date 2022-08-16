import { CITIES } from '../../../const';
import { MouseEvent, useState } from 'react';
import CityTab from '../../atoms/city-tab/city-tab';

export default function CitiesTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(CITIES[0]);

  const cityClickHandler = (evt: MouseEvent) => {
    const activeElement = evt.target as HTMLLinkElement;
    activeElement.dataset.city && setActiveTab(activeElement.dataset.city);
  };

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((city) => (
            <li className='locations__item' key={`tab-${city}`}>
              <CityTab
                city={city}
                data-city={city}
                isActive={city === activeTab}
                onClick={cityClickHandler}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
