
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class Banner extends Component {

  constructor(props) {
    super(props);


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
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'powderblue'
        }}>
          <Text style={[styles.basicText]}>
            Banner for <Text style={styles.importantText}>{this.props.name}</Text>
          </Text>

          <Text style={[styles.basicText, styles.importantText]}>{this.props.name}</Text>

          <Button style={{flex:1, alignItems: 'stretch',}} onPress={()=>{console.log("Log test");}} title="title"/>

        </View>
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
    flex: 1,
    alignItems: 'flex-end'
  },
  importantText: {
    color: "#FF0000",
    fontWeight: 'bold'
  }
});
