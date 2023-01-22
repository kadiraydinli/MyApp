import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
