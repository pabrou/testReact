
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
    ScrollView, Image, Switch
} from 'react-native';

export default class Banner extends Component {

    changeNameText: Function;

    _changeNameText(name) {
        this.props.onChange(name)

        this.setState({
            name: name
        });
    }

  constructor(props) {
    super(props);

    this.changeNameText = this._changeNameText.bind(this);

    this.state = {
        name: this.props.name,
        checked: false
    }

    // Toggle the state every second
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { isShowingText: !previousState.isShowingText };
    //   });
    // }, 1000);

  }

  render() {
    if (this.props.show === true) {
      return (
          <ScrollView>
            <View style={{
              alignItems: 'stretch',
              backgroundColor: 'powderblue'
            }}>
              <Text style={[styles.basicText]}>
                Banner for <Text style={styles.importantText}>{this.props.name}</Text>
              </Text>

              <Text style={[styles.basicText, styles.importantText]}>
                  {this.state.name.split(' ').map((word)=>word && '🍕').join('')}
              </Text>

              <TextInput placeholder="Insert new name" onChangeText={(text)=>this.changeNameText(text)}>
                  {this.state.name}
              </TextInput>

              <Button onPress={()=>{console.log("Log test");}} title="title"/>

              <TouchableNativeFeedback
                onPress={()=>{}}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                  </View>
              </TouchableNativeFeedback>
              <Switch value={this.state.checked} onValueChange={(checked)=>this.setState({checked: checked})}/>
              <ScrollView
                minimumZoomScale={0.5}
                maximumZoomScale={10.0}>
                  <Image
                      style={{height: 200}}
                      source={{uri: 'https://auto.ndtvimg.com/bike-images/big/suzuki/gsx-r1000r/suzuki-gsx-r1000r.jpg?v=2'}}/>
              </ScrollView>
            </View>
        </ScrollView>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  basicText: {
    color: "#000000",
    fontSize: 14,
    alignItems: 'flex-end'
  },
  importantText: {
    color: "#FF0000",
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
