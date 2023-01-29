import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { enableLatestRenderer } from 'react-native-maps';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GeolocationButton, Header, Map } from 'components';
import { store } from 'store/store';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />
          <Map />
          <GeolocationButton />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
