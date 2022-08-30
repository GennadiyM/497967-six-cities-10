import { NameSpace } from '../../const';
import { State } from '../../types/store';

export const getCity = (state: State): string => state[NameSpace.Logic].city;
export const getSortType = (state: State): string => state[NameSpace.Logic].sorting;
