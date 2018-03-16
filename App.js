/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';

import Banner from './components/Banner.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = { name: string };
type State = { showBanners: boolean };

export default class App extends Component<Props, State> {

  onToggleVisibility: Function;

  _onToggleVisibility() {
    this.setState(previousState => {
      return { showBanners: !previousState.showBanners};
    });
    console.log('Toggle pressed');
  }

  test() {
    return 45;
  }

  constructor(props: Props) {
    super(props);

    this.state = {showBanners: true};

    this.onToggleVisibility = this._onToggleVisibility.bind(this);
  }

  render() {
    let pic = {
      uri: 'https://auto.ndtvimg.com/bike-images/big/suzuki/gsx-r1000r/suzuki-gsx-r1000r.jpg?v=2'
    };

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Button title="Toggle visibility" onPress={this.onToggleVisibility}/>
          <Banner name="Tony Stark" show={this.state.showBanners}/>
          <Banner name="Jon Stark"  show={this.state.showBanners}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
