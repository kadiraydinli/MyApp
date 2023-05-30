import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { GeolocationSlice } from './features/GeolocationSlice';
import { MapSlice } from './features/MapSlice';
import { SearchSlice } from './features/SearchSlice';

export const store = configureStore({
  reducer: {
    searchLocation: SearchSlice.reducer,
    myLocation: GeolocationSlice.reducer,
    mapLocation: MapSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
