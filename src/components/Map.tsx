import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

type MapProps = {};

const Map: React.FC<MapProps> = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
