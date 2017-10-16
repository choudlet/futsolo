import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from './src/containers/NavigationContainer';
import configureStore from './src/store/configureStore';
import initialState from './src/reducers/initialState';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';

export default class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
       <NavigationContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
