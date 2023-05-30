import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Geometry {
  latitude: number;
  longitude: number;
}

export interface Search {
  placeID: string;
  address: string;
  geometry: Geometry | null;
}

export interface SearchState {
  searches: Search[];
}

const initialState: SearchState = {
  searches: [],
};

export const SearchSlice = createSlice({
  name: 'searchLocation',
  initialState,
  reducers: {
    setSearchLoc: (state, action: PayloadAction<Search>) => {
      state.searches.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchLoc } = SearchSlice.actions;

export const searchCount = (state: SearchState) => state.searches.length;
