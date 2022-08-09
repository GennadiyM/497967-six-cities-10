import { useParams } from 'react-router-dom';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import FullCard from '../../components/molecules/full-card/full-card';
import { AuthorizationStatus } from '../../const';
import { OFFERS } from '../../mocks';

export default function OfferScreen({
  authorizationStatus,
}: {
  authorizationStatus: AuthorizationStatus;
}) {
  const { id } = useParams();
  const [filteredOffer] = OFFERS.filter((offer) => offer.id.toString() === id); //todo

  if (!filteredOffer) {
    return null;
  }

  return (
    filteredOffer && (
      <PageLayout authorizationStatus={authorizationStatus}>
        <main className="page__main page__main--property">
          <section className="property">
            <FullCard offer={filteredOffer} />
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list"></div>
            </section>
          </div>
        </main>
      </PageLayout>
    )
  );
}
