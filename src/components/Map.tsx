import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MapStyleElement, PROVIDER_GOOGLE } from 'react-native-maps';
import mapTheme from 'config/mapTheme.json';
import { InitialRegion } from 'utils/constant';
import useGeolocation from 'hooks/useGeolocation';

const CustomMapStyle: MapStyleElement[] = mapTheme;

type MapProps = {};

const Map: React.FC<MapProps> = () => {
  const mapRef = useRef<MapView>(null);
  const { location, fetchCurrentPosition } = useGeolocation();

  useEffect(() => {
    fetchCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mapRef.current && location.currentLocation) {
      mapRef.current.animateToRegion(location.currentLocation);
    }
  }, [location]);

  return (
    <MapView
      ref={mapRef}
      showsUserLocation
      initialRegion={InitialRegion}
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      customMapStyle={CustomMapStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
