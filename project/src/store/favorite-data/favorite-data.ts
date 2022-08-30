import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteOffers } from '../../types/store';
import { fetchFavoriteOffersAction } from '../api-actions';

const initialState: FavoriteOffers = {
  favoriteOffers: null,
  isFavoriteOffersLoaded: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersLoaded = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.isFavoriteOffersLoaded = false;
        state.favoriteOffers = action.payload;
      });
  }
});
