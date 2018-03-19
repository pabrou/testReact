
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
      screen: HomeScreen
  }
}, {
    initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
