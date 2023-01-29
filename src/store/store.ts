import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { GeolocationSlice } from './features/GeolocationSlice';
import { SearchSlice } from './features/SearchSlice';

export const store = configureStore({
  reducer: {
    searchText: SearchSlice.reducer,
    myLocation: GeolocationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
