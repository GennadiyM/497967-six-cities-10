import { useParams } from 'react-router-dom';
import NotFound from '../../components/atoms/not-found/not-found';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import NearPlaces from '../../components/molecules/near-places/near-places';
import FullCard from '../../components/organisms/full-card/full-card';
import { AuthorizationStatus } from '../../const';
import { FullOffer } from '../../types/base-offer';

const MAX_COUNT_NEAR_PLACE = 3;

export default function OfferScreen({
  authorizationStatus,
  offers,
}: {
  authorizationStatus: AuthorizationStatus;
  offers: FullOffer[];
}) {
  const { id } = useParams();
  const [filteredOffer] = offers.filter((offer) => offer.id.toString() === id); //todo

  return (
    <PageLayout authorizationStatus={authorizationStatus}>
      {filteredOffer ? (
        <main className='page__main page__main--property'>
          <section className='property'>
            <FullCard
              offer={filteredOffer}
              authorizationStatus={authorizationStatus}
            />
            <section className='property__map map'></section>
          </section>
          <NearPlaces offers={offers.slice(0, MAX_COUNT_NEAR_PLACE)} />
        </main>
      ) : (
        <NotFound />
      )}
    </PageLayout>
  );
}
