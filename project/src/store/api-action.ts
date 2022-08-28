import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {
  loadOffers,
  setDataLoadedStatus,
  requireAuthorization,
  redirectToRoute,
} from './action';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(loadOffers(data));
  dispatch(setDataLoadedStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
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
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const fetchNearbyPlacesAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearPlaces',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.fetchOffersNearby(hotelId));
    return data;
  },
);