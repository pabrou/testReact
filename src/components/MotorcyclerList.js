

import React, { Component } from 'react';

import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

type Motorcycle = { title: string };
type Props = { motorcycles: Motorcycle[] };

export default class MotorcyclerList extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <FlatList
                data={this.props.motorcycles}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={(item, index) => item.title}/>
        );
    }

    _renderItem(item : Motorcycle) {
        return(
            <Text>{item.title}</Text>
        );
    }
}
