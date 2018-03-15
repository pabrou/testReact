
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
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
    if (this.props.show == true) {
      return (<Text>Banner for {this.props.name}</Text>);
    } else {
      return null;
    }
  }

  setVisible() {
    setState({
      isShowingText: false
    });
  }
}
