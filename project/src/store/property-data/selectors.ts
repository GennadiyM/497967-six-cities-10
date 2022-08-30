import { NameSpace } from '../../const';

import { Offer } from '../../types/offer';
import { ReviewType } from '../../types/review/review-type';
import { State } from '../../types/store';

export const getOffer = (state: State): Offer | null =>
  state[NameSpace.Property].offer;
export const getOfferLoadedStatus = (state: State): boolean =>
  state[NameSpace.Property].isOfferLoaded;
export const getNearbyOffers = (state: State): Offer[] =>
  state[NameSpace.Property].nearbyOffers;
export const getNearbyOffersLoadedStatus = (state: State): boolean =>
  state[NameSpace.Property].isNearbyOffersLoaded;
export const getReviews = (state: State): ReviewType[] =>
  state[NameSpace.Property].reviews;
export const getReviewsLoadedStatus = (state: State): boolean =>
  state[NameSpace.Property].isReviewsLoaded;
