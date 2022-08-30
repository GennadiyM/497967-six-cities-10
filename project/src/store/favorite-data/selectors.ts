import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/store';

export const getFavoriteData = (state: State): Offer[] => state[NameSpace.Favorite].offers;
export const getFavoriteLoadingStatus = (state: State): boolean => state[NameSpace.Favorite].isOffersLoaded;
