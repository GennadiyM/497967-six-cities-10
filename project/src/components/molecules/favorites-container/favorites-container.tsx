import { Offer } from '../../../types/offer';
import FavoritesList from '../favorites-list/favorites-list';

export default function FavoritesContainer({ offers }: { offers: Offer[] }) {
  return (
    <div className='page__favorites-container container'>
      <section className='favorites'>
        <h1 className='favorites__title'>Saved listing</h1>
        <FavoritesList offers={offers} />
      </section>
    </div>
  );
}
