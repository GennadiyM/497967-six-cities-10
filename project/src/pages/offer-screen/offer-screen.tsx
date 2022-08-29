import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../../components/atoms/map/map';
import NotFound from '../../components/atoms/not-found/not-found';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import NearPlaces from '../../components/molecules/near-places/near-places';
import FullCard from '../../components/organisms/full-card/full-card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getNearbyOffers, getOffer } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchOfferByIdAction, fetchNearbyPlacesAction } from '../../store/api-action';

export default function OfferScreen() {
  const { id } = useParams();
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);


  return (
    <PageLayout>
      {offer ? (
        <main className='page__main page__main--property'>
          <section className='property'>
            <FullCard
              offer={offer}
            />
            {nearbyOffers && id && (
              <Map
                className={'property__map'}
                activePointId={+id}
                city={offer.city}
                points={[...nearbyOffers, offer]}
                style={{
                  maxWidth: '60%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              />
            )}
          </section>
          {nearbyOffers && <NearPlaces offers={nearbyOffers} />}
        </main>
      ) : (
        <NotFound />
      )}
    </PageLayout>
  );
}
