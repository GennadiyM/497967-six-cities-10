import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appData } from './app-data/app-data';
import { userProcess } from './user-process/user-process';
import { propertyData } from './property-data/property-data';
import { favoriteData } from './favorite-data/favorite-data';
import { logicProcess } from './logic-process/logic-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appData.reducer,
  [NameSpace.Property]: propertyData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
  [NameSpace.Logic]: logicProcess.reducer
});
