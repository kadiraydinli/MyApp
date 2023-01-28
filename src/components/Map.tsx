import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MapStyleElement, PROVIDER_GOOGLE } from 'react-native-maps';
import mapTheme from '../config/mapTheme.json';

type MapProps = {};

const Map: React.FC<MapProps> = () => {
  const customMapStyle: MapStyleElement[] = mapTheme;
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      customMapStyle={customMapStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
