/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {
  loadOffers,
  setOffersLoadedStatus,
  requireAuthorization,
  redirectToRoute,
  loadFavoriteOffers,
} from './action';
import { dropToken, saveToken } from '../services/token';

type ThunkAPIConfigType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  ThunkAPIConfigType
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  ThunkAPIConfigType
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const data = await api.post<UserData>(APIRoute.Login, { email, password });
  console.log(data);
  saveToken(data.token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkAPIConfigType
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const loadOffersAction = createAsyncThunk<
  void,
  undefined,
  ThunkAPIConfigType
>('data/loadOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadedStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(loadOffers(data));
  dispatch(setOffersLoadedStatus(false));
});

export const loadFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  ThunkAPIConfigType
>('data/loadFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Favorite);
  dispatch(loadFavoriteOffers(data));
});
