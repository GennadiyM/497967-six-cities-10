import { createReducer } from '@reduxjs/toolkit';
import { CITIES, Sorting } from '../const';
import { OFFERS } from '../mocks/offers';
import { CityName } from '../types/city-name';
import { FullOffer } from '../types/offer';
import { changeCity, changeSorting, loadOffers } from './action';

export type InitialState = {
  offers: FullOffer[],
  city: CityName,
  sorting: Sorting,
}

const initialState: InitialState = {
  offers: [],
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
