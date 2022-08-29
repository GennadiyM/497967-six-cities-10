import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, Sorting } from '../const';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { changeCity, changeSorting, loadOffers, requireAuthorization, setOffersLoadedStatus, loadFavoriteOffers, setFavoritesLoadedStatus } from './action';

export type InitialState = {
  offers: Offer[] | [],
  favoriteOffers: Offer[] | [],
  city: CityName,
  sorting: Sorting,
  authorizationStatus: AuthorizationStatus,
  isOffersLoaded: boolean;
  isFavoritesLoaded: boolean;
}

const initialState: InitialState = {
  offers: [],
  favoriteOffers: [],
  city: CITIES[0],
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoaded: false,
  isFavoritesLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoadedStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setFavoritesLoadedStatus, (state, action) => {
      state.isFavoritesLoaded = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
