import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Region } from 'react-native-maps/lib/sharedTypes';

export interface MapState extends Region { }

const initialState: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const MapSlice = createSlice({
  name: 'mapLocation',
  initialState,
  reducers: {
    setMapLocation: (state, action: PayloadAction<Region>) => {
      console.log('sada: ', action.payload);
      state = action.payload;
    },
  },
});

export const { setMapLocation } = MapSlice.actions;

// export const currentMapLocation = () => 