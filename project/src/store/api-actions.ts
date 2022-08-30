import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute, NameSpace } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ReviewFormData } from '../types/review/review-form-data';
import { ReviewData } from '../types/review/review-data';
import { ReviewType } from '../types/review/review-type';
import { FavoriteStatus } from '../types/favorite-status';
import { AppDispatch, State } from '../types/store';

type ThunkAPIConfigType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchDataAction = createAsyncThunk<
  Offer[],
  undefined,
  ThunkAPIConfigType
>(`${NameSpace.App}/fetchData`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  return data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  ThunkAPIConfigType
>(
  `${NameSpace.Favorite}/fetchFavoriteOffers`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Favorite}`);
    return data;
  }
);

export const postFavoriteAction = createAsyncThunk<
  void,
  FavoriteStatus,
  ThunkAPIConfigType
>(
  `${NameSpace.Favorite}/postFavorite`,
  async ({ id, favoriteStatus }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Favorite}/${id}/${favoriteStatus}`);
    dispatch(fetchFavoriteOffersAction());
  }
);

export const fetchOfferAction = createAsyncThunk<
  Offer,
  number,
  ThunkAPIConfigType
>(`${NameSpace.Property}/fetchOffer`, async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const fetchNearbyOffersAction = createAsyncThunk<
  Offer[],
  number,
  ThunkAPIConfigType
>(
  `${NameSpace.Property}/fetchNearbyOffers`,
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<
  ReviewType[],
  number,
  ThunkAPIConfigType
>(
  `${NameSpace.Property}/fetchReviews`,
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postReviewAction = createAsyncThunk<
  void,
  ReviewData,
  ThunkAPIConfigType
>(
  `${NameSpace.Property}/postReview`,
  async ({ id, comment: { comment, rating } }, { dispatch, extra: api }) => {
    await api.post<ReviewFormData>(`${APIRoute.Comments}/${id}`, {
      rating,
      comment,
    });
    dispatch(fetchReviewsAction(id));
  }
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  ThunkAPIConfigType
>(`${NameSpace.User}/checkAuth`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<void, AuthData, ThunkAPIConfigType>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkAPIConfigType
>(`${NameSpace.User}/logout`, async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(redirectToRoute(AppRoute.Root));
});
