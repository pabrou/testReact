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
  Alert, StatusBar
} from 'react-native';

import Banner from './components/Banner';
import MotorcyclerList from './components/MotorcyclerList';
import { StackNavigator } from 'react-navigation';
import HeaderButtons from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = { name: string, navigation: any };
type State = { showBanners: boolean, motorcycles: []};

export default class HomeScreen extends Component<Props, State> {

    static navigationOptions = ({ navigation } : any) => {
        const { params } = navigation.state;

        return {
          title: params ? params.name : 'Home',
          headerStyle: styles.header,
          headerRight: (
              <HeaderButtons IconComponent={Ionicons} iconSize={23} color="blue">
                  <HeaderButtons.Item title="select" onPress={() => console.log('edit')} />
              </HeaderButtons>
          ),
        }
      };

  onToggleVisibility: Function;
  onBannerChange: Function;

  _onToggleVisibility() {
    // this.setState(previousState => {
    //   return { showBanners: !previousState.showBanners};
    // });

    this.props.navigation.navigate('Details', {
        name: 'Test of params'
    });
  }

  _onBannerChange(name) {
      console.log("CHANGED:"+name);
  }

  _getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              motorcycles: responseJson.movies
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  constructor(props: Props) {
    super(props);

    this.state = {showBanners: true, motorcycles: []};

    this.onToggleVisibility = this._onToggleVisibility.bind(this);
    this.onBannerChange = this._onBannerChange.bind(this);
  }

  componentDidMount() {
      this._getMoviesFromApiAsync();
  }

  render() {
    let pic = {
      uri: 'https://auto.ndtvimg.com/bike-images/big/suzuki/gsx-r1000r/suzuki-gsx-r1000r.jpg?v=2'
    };

    let navParam = this.props.navigation.state;
    let nameParam = navParam.params ? navParam.params.name : null;

    console.log("Name of Param:"+ JSON.stringify(nameParam));

    return (
      <View style={{flex: 1}}>
          <StatusBar
             backgroundColor="blue"
             barStyle="light-content"
           />
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

        <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({name: 'Updated!'})}/>

        <View style={{height: 100}}>
            <MotorcyclerList motorcycles={this.state.motorcycles}/>
        </View>
        <View style={{flex: 1}}>
          <Button title="Toggle visibility" onPress={this.onToggleVisibility}/>
          <Banner name="Tony Stark" show={this.state.showBanners} onChange={(name)=>this.onBannerChange(name)}/>
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
  header: {
      backgroundColor: '#ADD8E6',
  }
});
