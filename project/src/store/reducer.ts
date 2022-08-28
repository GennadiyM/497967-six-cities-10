import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, Sorting } from '../const';
import { FullOffer } from '../types/offer';
import { changeCity, changeSorting, loadOffers, requireAuthorization, setDataLoadedStatus } from './action';

type InitialState = {
  offers: FullOffer[],
  city: string,
  sorting: Sorting,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean;
}


const initialState: InitialState = {
  offers: [],
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
