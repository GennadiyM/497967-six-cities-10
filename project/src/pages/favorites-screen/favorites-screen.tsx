import { useEffect } from 'react';
import FavoritesEmpty from '../../components/atoms/favorites-empty/favorites-empty';
import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import FavoritesContainer from '../../components/molecules/favorites-container/favorites-container';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteLoadingStatus, getFavoriteOffers } from '../../store/favorite-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

export default function FavoritesScreen() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();
  const isFavoriteOffersLoaded = useAppSelector(getFavoriteLoadingStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && !favoriteOffers) {
      dispatch(fetchFavoriteOffersAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, favoriteOffers]);

  if (isFavoriteOffersLoaded) {
    return <LoadingScreen />;
  }

  return (
    <PageLayout
      withFooter
      modifier={
        favoriteOffers && favoriteOffers.length === 0
          ? PageLayoutModifier.FavoritesEmpty
          : ''
      }
    >
      <main
        className={`page__main page__main--favorites ${
          favoriteOffers?.length === 0 && 'page__main--favorites-empty'
        }`}
      >
        {favoriteOffers && favoriteOffers.length > 0 ? (
          <FavoritesContainer offers={favoriteOffers} />
        ) : (
          <FavoritesEmpty />
        )}
      </main>
    </PageLayout>
  );
}
