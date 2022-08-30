import { createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace, Sorting } from '../../const';
import { Logic } from '../../types/store';


const initialState: Logic = {
  city: CITIES[0],
  sorting: Sorting.Popular,
};

export const logicProcess = createSlice({
  name: NameSpace.Logic,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSorting: (state, action) => {
      state.city = action.payload;
    }
  },
});

export const { changeCity, changeSorting } = logicProcess.actions;
