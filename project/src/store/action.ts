import { createAction } from '@reduxjs/toolkit';

export const loadOffers = createAction('loadOffers');

export const changeCity = createAction('changeCity', (value) => ({
  payload: value,
}));

export const changeSorting = createAction('changeFilter', (value) => ({
  payload: value,
}));

