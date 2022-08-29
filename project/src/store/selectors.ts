import { State } from '../types/state';

export const getState = (state: State) => state;

export const getSortType = (state: State) => state.sorting;

export const getCityName = (state: State) => state.city;

export const getOffers = (state: State) => state.offers;

export const getFavoriteOffers = (state: State) => state.favoriteOffers;

export const getAuthorizationStatus = (state: State) =>
  state.authorizationStatus;

export const getOffersLoadedStatus = (state: State) => state.isOffersLoaded;

export const getFavoritesLoadedStatus = (state: State) =>
  state.isFavoritesLoaded;
