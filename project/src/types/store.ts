import { AuthorizationStatus, Sorting } from '../const';
import {store} from '../store';
import { CityName } from './city-name';
import { Offer } from './offer';
import { ReviewType } from './review/review-type';
import { UserData } from './user-data';

export type Logic = {
  city: CityName;
  sorting: Sorting;
};

export type UserProcess = {
  authStatus: AuthorizationStatus;
  user: UserData | null;
};

export type Data = {
  offers: Offer[] | [];
  isOffersLoaded: boolean;
}

export type PropertyData = {
  offer: null | Offer,
  isOfferLoaded: boolean,
  nearbyOffers: Offer[] | [],
  isNearbyOffersLoaded: boolean,
  reviews: ReviewType[] | [],
  isReviewsLoaded: boolean,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
