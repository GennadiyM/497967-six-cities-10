import dayjs from 'dayjs';
import { Offer } from './types/offer';
import { ReviewType } from './types/review/review-type';

export const sortByPriceHigh = (offerA: Offer, offerB: Offer) =>
  offerA.price - offerB.price;
export const sortByPriceLow = (offerA: Offer, offerB: Offer) =>
  offerB.price - offerA.price;
export const sortByTopRatedFirst = (offerA: Offer, offerB: Offer) =>
  offerB.rating - offerA.rating;

export const compareDays = (commentA: ReviewType, commentB: ReviewType) => dayjs(commentB.date).diff(dayjs(commentA.date));

export const randomInteger = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
