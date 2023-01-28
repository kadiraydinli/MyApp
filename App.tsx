import React from 'react';
import { StyleSheet } from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Header, Map } from './src/components';
import { store } from './src/store/store';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />
          <Map />
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
