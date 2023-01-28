import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const SearchSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText } = SearchSlice.actions;

// export default SearchSlice.reducer;
