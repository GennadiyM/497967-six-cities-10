import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/store';
import { fetchDataAction } from '../api-actions';

const initialState: Data = {
  offers: [],
  isOffersLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataAction.pending, (state) => {
        state.isOffersLoaded = true;
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoaded = false;
      });
  }
});
