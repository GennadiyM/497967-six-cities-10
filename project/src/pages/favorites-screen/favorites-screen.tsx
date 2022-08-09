import PageLayout from '../../components/layouts/page-layout/page-layout';
import FavoritesLIst from '../../components/molecules/favorites-list/favorites-list';
import { AuthorizationStatus } from '../../const';
import { OFFERS } from '../../mocks'; //todo

export default function FavoritesScreen({
  authorizationStatus,
}: {
  authorizationStatus: AuthorizationStatus;
}) {
  return (
    <PageLayout authorizationStatus={authorizationStatus} withFooter>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesLIst offers={OFFERS.filter(({isFavorite}) => isFavorite)}/>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
