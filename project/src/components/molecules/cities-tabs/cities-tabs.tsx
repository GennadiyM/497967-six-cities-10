import { CITIES } from '../../../const';
import { MouseEvent } from 'react';
import CityTab from '../../atoms/city-tab/city-tab';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeCity } from '../../../store/action';
import { getCityName } from '../../../store/helpers';

export default function CitiesTabs(): JSX.Element {
  const city = useAppSelector(getCityName);
  const dispatch = useAppDispatch();

  const cityClickHandler = (evt: MouseEvent) => {
    const activeElement = evt.target as HTMLLinkElement;
    dispatch(changeCity(activeElement.dataset.city));
  };

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((cityName) => (
            <li className='locations__item' key={`tab-${cityName}`}>
              <CityTab
                city={cityName}
                data-city={cityName}
                isActive={city === cityName}
                onClick={cityClickHandler}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
