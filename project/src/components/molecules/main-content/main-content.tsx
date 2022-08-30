import React, { useMemo } from 'react';
import { useCallback, useState } from 'react';
import { Sorting } from '../../../const';
import { useAppSelector } from '../../../hooks/redux';
import { getSortType } from '../../../store/logic-process/selectors';
import { Offer } from '../../../types/offer';
import { sortByPriceHigh, sortByPriceLow, sortByTopRatedFirst } from '../../../utils';
import Map from '../../atoms/map/map';
import PlaceCard from '../../atoms/place-card/place-card';
import Sort from '../../atoms/sort/sort';

type MainContentProps = {
  offers: Offer[];
};

export type ActiveOfferType = number | null;

function MainContent({ offers }: MainContentProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<ActiveOfferType>(null);
  const sorting = useAppSelector(getSortType);
  const city = offers[0].city;

  const getSortingOffers = useMemo(() => {
    const sortingOffers = offers.slice();

    switch (sorting) {
      case Sorting.Popular:
        return sortingOffers;
      case Sorting.ToLOw:
        return sortingOffers.sort(sortByPriceLow);
      case Sorting.ToHigh:
        return sortingOffers.sort(sortByPriceHigh);
      case Sorting.Rated:
        return sortingOffers.sort(sortByTopRatedFirst);
      default:
        return sortingOffers;
    }
  }, [sorting, offers]);

  const onMouseOver = useCallback((id: number) => setActiveOfferId(id), []);

  const onMouseOut = useCallback(() => setActiveOfferId(0), []);

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offers.length} places to stay in {city.name}</b>
          <Sort />
          <div className='cities__places-list places__list tabs__content'>
            {getSortingOffers.map((offer) => (
              <PlaceCard
                key={`offer-${offer.id}`}
                offer={offer}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
              />
            ))}
          </div>
        </section>
        <div className='cities__right-section'>
          <Map activePointId={activeOfferId} points={offers} city={city} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainContent);
