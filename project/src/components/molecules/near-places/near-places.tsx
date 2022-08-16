import { PlaceCardClassType } from '../../../const';
import { FullOffer } from '../../../types/base-offer';
import PlaceCard from '../../atoms/place-card/place-card';

export default function NearPlaces({ offers }: { offers: FullOffer[] }) {
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          {offers.map((offer) => (
            <PlaceCard
              cardClass={PlaceCardClassType.Near}
              key={`offer-${offer.id}`}
              offer={offer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
