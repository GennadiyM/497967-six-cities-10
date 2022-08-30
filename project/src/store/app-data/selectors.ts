import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/store';

export const getAppData = (state: State): Offer[] => state[NameSpace.App].offers;
export const getAppDataLoadedStatus = (state: State): boolean => state[NameSpace.App].isOffersLoaded;
