import { Offer } from './types/offer';

export const sortByPriceHigh = (offerA: Offer, offerB: Offer) =>
  offerA.price - offerB.price;
export const sortByPriceLow = (offerA: Offer, offerB: Offer) =>
  offerB.price - offerA.price;
export const sortByTopRatedFirst = (offerA: Offer, offerB: Offer) =>
  offerB.rating - offerA.rating;
