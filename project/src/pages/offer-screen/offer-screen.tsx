import { useParams } from 'react-router-dom';
import Map from '../../components/atoms/map/map';
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
  const city = offers[0].city;

  return (
    <PageLayout authorizationStatus={authorizationStatus}>
      {filteredOffer ? (
        <main className='page__main page__main--property'>
          <section className='property'>
            <FullCard
              offer={filteredOffer}
              authorizationStatus={authorizationStatus}
            />
            {id && (
              <Map
                className={'property__map'}
                activePointId={+id}
                city={city}
                points={offers}
                style={{
                  maxWidth: '60%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              />
            )}
          </section>
          <NearPlaces offers={offers.slice(0, MAX_COUNT_NEAR_PLACE)} />
        </main>
      ) : (
        <NotFound />
      )}
    </PageLayout>
  );
}
