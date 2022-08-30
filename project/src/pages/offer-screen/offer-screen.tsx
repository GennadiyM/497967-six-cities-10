import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../../components/atoms/map/map';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import NearPlaces from '../../components/molecules/near-places/near-places';
import FullCard from '../../components/organisms/full-card/full-card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { getNearbyOffers, getNearbyOffersLoadedStatus, getOffer, getOfferLoadedStatus, getReviews } from '../../store/property-data/selectors';

import LoadingScreen from '../loading-screen/loading-screen';

const MAX_COUNT_NEAR_PLACE = 3;

export default function OfferScreen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const hotel = useAppSelector(getOffer);
  const comments = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isOfferLoaded = useAppSelector(getOfferLoadedStatus);
  const isNearbyLoaded = useAppSelector(getNearbyOffersLoadedStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(+id));
      dispatch(fetchReviewsAction(+id));
      dispatch(fetchNearbyOffersAction(+id));

    }
  }, [dispatch, id]);

  if (isOfferLoaded || isNearbyLoaded) {
    return <LoadingScreen />;
  }
  return (
    <PageLayout>
      <main className='page__main page__main--property'>
        <section className='property'>
          {hotel && <FullCard offer={hotel} comments={comments}/>}
          {hotel && (
            <Map
              className={'property__map'}
              activePointId={+hotel.id}
              city={hotel.city}
              points={[...nearbyOffers, hotel]}
              style={{
                maxWidth: '60%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            />
          )}
        </section>
        {nearbyOffers && (
          <NearPlaces offers={nearbyOffers.slice(0, MAX_COUNT_NEAR_PLACE)} />
        )}
      </main>
    </PageLayout>
  );
}
