import FavoritesEmpty from '../../components/atoms/favorites-empty/favorites-empty';
import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import FavoritesContainer from '../../components/molecules/favorites-container/favorites-container';
import { useAppSelector } from '../../hooks/redux';
import { getFavoriteOffers } from '../../store/helpers';

export default function FavoritesScreen() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <PageLayout
      withFooter
      modifier={
        favoriteOffers.length === 0
          ? PageLayoutModifier.FavoritesEmpty
          : undefined
      }
    >
      <main
        className={`page__main page__main--favorites ${
          favoriteOffers.length === 0 && 'page__main--favorites-empty'
        }`}
      >
        {favoriteOffers.length > 0 ? (
          <FavoritesContainer offers={favoriteOffers} />
        ) : (
          <FavoritesEmpty />
        )}
      </main>
    </PageLayout>
  );
}
