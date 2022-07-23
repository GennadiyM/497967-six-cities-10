import { CITIES } from '../../../const';
import { useState } from 'react';
import CityTab from '../../atoms/city-tab/city-tab';


export default function CitiesTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(CITIES[0]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={`tab-${city}`}>
              <CityTab city={city} onClick={() => setActiveTab(city)} isActive={city === activeTab} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
