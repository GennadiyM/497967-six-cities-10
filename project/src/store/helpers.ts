import { AuthorizationStatus, Sorting } from '../const';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { InitialState } from './reducer';

export const getSortType = (state :InitialState) : Sorting => state.sorting;

export const getCityName = (state :InitialState) : CityName => state.city;

export const getFavoriteOffers = (state :InitialState) : Offer[] => state.favoriteOffers;

export const getNearbyOffers = (state :InitialState) : Offer[] | null => state.nearbyOffers;

export const getOffer = (state :InitialState) : Offer | null => state.offer;

export const getAuthorizationStatus = (state :InitialState) : AuthorizationStatus => state.authorizationStatus;
