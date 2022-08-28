import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, Sorting } from '../const';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { changeCity, changeSorting, loadNearbyOffers, loadOffers, requireAuthorization, setDataLoadedStatus, loadFavoriteOffers, loadOfferById } from './action';

export type InitialState = {
  offer: Offer | null,
  offers: Offer[] | [],
  favoriteOffers: Offer[] | [],
  nearbyOffers: Offer[] | null;
  city: CityName,
  sorting: Sorting,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  offer: null,
  offers: [],
  nearbyOffers: null,
  favoriteOffers: [],
  city: CITIES[0],
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    .addCase(loadOfferById, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
