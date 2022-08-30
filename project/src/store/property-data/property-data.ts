import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PropertyData } from '../../types/store';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../api-actions';

const initialState: PropertyData = {
  offer: null,
  isOfferLoaded: false,
  nearbyOffers: [],
  isNearbyOffersLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
};

export const propertyData = createSlice({
  name: NameSpace.Property,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferLoaded = false;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.isNearbyOffersLoaded = false;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoaded = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsLoaded = true;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoaded = false;
      });
  }
});
