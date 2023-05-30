import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MapStyleElement, PROVIDER_GOOGLE } from 'react-native-maps';
import mapTheme from 'config/mapTheme.json';
import useGeolocation from 'hooks/useGeolocation';
import { useAppSelector } from 'store/store';

const CustomMapStyle: MapStyleElement[] = mapTheme;

type MapProps = {};

const Map: React.FC<MapProps> = () => {
  const mapRef = useRef<MapView>(null);
  const mapLocation = useAppSelector(store => store.mapLocation);
  const { fetchCurrentPosition } = useGeolocation();

  useEffect(() => {
    fetchCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mapRegionAnimate = () => {
    if (mapRef.current && mapLocation) {
      mapRef.current.animateToRegion(mapLocation);
    }
  };

  useEffect(() => {
    mapRegionAnimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapLocation]);

  return (
    <MapView
      ref={mapRef}
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      onRegionChange={mapRegionAnimate}
      region={mapLocation}
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
