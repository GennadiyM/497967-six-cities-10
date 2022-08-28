import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FullOffer } from '../types/offer';

export const loadOffers = createAction<FullOffer[]>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const changeCity = createAction('logic/changeCity', (value) => ({
  payload: value,
}));

export const changeSorting = createAction('logic/changeFilter', (value) => ({
  payload: value,
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
