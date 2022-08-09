import { BaseOffer } from '../../../types/base-offer';
import PlaceCard from '../../atoms/place-card/place-card';
import Sort from '../../atoms/sort/sort';

type MainContentProps = {
  offers: BaseOffer[];
};

export default function MainContent({
  offers,
}: MainContentProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCard key={`offer-${offer.id}`} offer={offer} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
