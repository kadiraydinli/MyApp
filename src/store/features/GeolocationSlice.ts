import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LatLng, Region } from 'react-native-maps/lib/sharedTypes';

export interface GeolocationState {
  currentLocation: Region | null;
}

export const initialState: GeolocationState = {
  currentLocation: null,
};

export const GeolocationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LatLng>) => {
      state.currentLocation = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };
    },
  },
});

export const { setLocation } = GeolocationSlice.actions;
