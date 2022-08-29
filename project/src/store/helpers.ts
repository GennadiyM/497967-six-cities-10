import { Sorting } from '../const';
import { CityName } from '../types/city-name';
import { InitialState } from './reducer';

export const getSortType = (state :InitialState) : Sorting => state.sorting;

export const getCityName = (state :InitialState) : CityName => state.city;
