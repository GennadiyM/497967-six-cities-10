import { useState } from 'react';
import { City, FullOffer } from '../../../types/base-offer';
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

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offers.length} places to stay in {city.name}</b>
          <Sort />
          <div className='cities__places-list places__list tabs__content'>
            {offers.map((offer) => (
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
