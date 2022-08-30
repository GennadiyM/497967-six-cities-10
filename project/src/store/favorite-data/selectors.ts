import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/store';

export const getFavoriteOffers = (state: State): Offer[] | null => state[NameSpace.Favorite].favoriteOffers;
export const getFavoriteLoadingStatus = (state: State): boolean => state[NameSpace.Favorite].isFavoriteOffersLoaded;
