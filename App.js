import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

import Navigator from './src/navigation';

export default App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
