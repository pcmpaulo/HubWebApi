/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import 'react-native-gesture-handler';

import InitialRouter from './src/router/InitialRouter';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <InitialRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
