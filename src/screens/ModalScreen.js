
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class ModalScreen extends Component {

    render() {
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});
