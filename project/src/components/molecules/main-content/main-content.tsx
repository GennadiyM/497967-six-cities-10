import { useState } from 'react';
import { Sorting } from '../../../const';
import { useAppSelector } from '../../../hooks/redux';
import { City, FullOffer } from '../../../types/offer';
import { sortByPriceHigh, sortByPriceLow, sortByTopRatedFirst } from '../../../utils';
import Map from '../../atoms/map/map';
import PlaceCard from '../../atoms/place-card/place-card';
import Sort from '../../atoms/sort/sort';

type MainContentProps = {
  offers: FullOffer[];
  city: City;
};

export type ActiveOfferType = number | null;

export default function MainContent({ offers, city }: MainContentProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<ActiveOfferType>(null);
  const sorting = useAppSelector((state) => state.sorting);

  const getSortingOffers = (stateOffers: FullOffer[]): FullOffer[] => {
    const sortingOffers = stateOffers.slice();

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
  };


  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offers.length} places to stay in {city.name}</b>
          <Sort />
          <div className='cities__places-list places__list tabs__content'>
            {getSortingOffers(offers).map((offer) => (
              <PlaceCard
                key={`offer-${offer.id}`}
                offer={offer}
                onMouseOver={() => setActiveOfferId(offer.id)}
                onMouseOut={() => setActiveOfferId(0)}
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
