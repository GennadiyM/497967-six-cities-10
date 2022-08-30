import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/store';
import { fetchFavoriteOffersAction } from '../api-actions';

const initialState: Data = {
  offers: [],
  isOffersLoaded: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersLoaded = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.isOffersLoaded = true;
        state.offers = action.payload;
      });
  }
});
