import { FullOffer } from './types/offer';

export const sortByPriceHigh = (offerA: FullOffer, offerB: FullOffer) =>
  offerA.price - offerB.price;
export const sortByPriceLow = (offerA: FullOffer, offerB: FullOffer) =>
  offerB.price - offerA.price;
export const sortByTopRatedFirst = (offerA: FullOffer, offerB: FullOffer) =>
  offerB.rating - offerA.rating;
