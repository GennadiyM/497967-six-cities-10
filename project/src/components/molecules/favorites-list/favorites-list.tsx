import { Link } from 'react-router-dom';
import { CITIES, PlaceCardClassType } from '../../../const';
import { FullOffer } from '../../../types/base-offer';
import PlaceCard from '../../atoms/place-card/place-card';

export default function FavoritesList({ offers }: { offers: FullOffer[] }) {
  const sortedByCityOffers = CITIES.map((cityName) => ({
    name: cityName,
    offers: offers.filter(({ city }) => city.name === cityName),
  }));

  return (
    <ul className='favorites__list'>
      {sortedByCityOffers.map(
        (item) =>
          item.offers.length > 0 && (
            <li
              className='favorites__locations-items'
              key={`favorite-${item.name}`}
            >
              <div className='favorites__locations locations locations--current'>
                <div className='locations__item'>
                  <Link
                    className='locations__item-link'
                    to={`/?city=${item.name}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </div>
              </div>
              <div className='favorites__places'>
                {item.offers.map(
                  ({
                    isPremium,
                    isFavorite,
                    previewImage,
                    title,
                    rating,
                    type,
                    price,
                    id,
                  }) => (
                    <PlaceCard
                      offer={{
                        isPremium,
                        isFavorite,
                        previewImage,
                        title,
                        rating,
                        type,
                        price,
                        id,
                      }}
                      cardClass={PlaceCardClassType.Favorite}
                      key={id}
                    />
                  )
                )}
              </div>
            </li>
          )
      )}
    </ul>
  );
}
