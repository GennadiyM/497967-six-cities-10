import { createReducer } from '@reduxjs/toolkit';
import { CITIES, Sorting } from '../const';
import { OFFERS } from '../mocks/offers';
import { FullOffer } from '../types/offer';
import { changeCity, changeSorting, loadOffers } from './action';

const initialState = {
  offers: [] as FullOffer[],
  city: CITIES[0],
  sorting: Sorting.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = OFFERS.slice();
    });
});
