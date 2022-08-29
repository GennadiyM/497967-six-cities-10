import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadOfferById = createAction<Offer>('data/loadOfferById');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const loadFavoriteOffers = createAction<Offer[]>('data/loadFavoriteOffers');

export const setOffersLoadedStatus = createAction<boolean>('data/setOffersLoadedStatus');

export const setFavoritesLoadedStatus = createAction<boolean>('data/setOffersLoadedStatus');

export const changeCity = createAction('logic/changeCity', (value) => ({
  payload: value,
}));

export const changeSorting = createAction('logic/changeFilter', (value) => ({
  payload: value,
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
