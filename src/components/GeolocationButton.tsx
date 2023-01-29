import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useGeolocation from 'hooks/useGeolocation';

type GeolocationButtonProps = {};

const GeolocationButton: React.FC<GeolocationButtonProps> = ({}) => {
  const insets = useSafeAreaInsets();
  const { fetchCurrentPosition } = useGeolocation();

  const positionStyle = {
    bottom: insets.bottom,
    right: 16,
  };

  const onPress = () => {
    fetchCurrentPosition();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, positionStyle]}>
      <Text>Loc</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 999,
  },
});

export default GeolocationButton;
