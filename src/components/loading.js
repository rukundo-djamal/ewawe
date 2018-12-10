import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.body}>
                <ActivityIndicator size={100} color={'#009688'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f2f1'
    },
    appbar: {
        flex: 0.5,
        backgroundColor: '#009688',
        elevation: 4,
    },
    body: {
        marginTop:200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        elevation: 2,
        height: 270,
        borderRadius: 8,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 16,
        backgroundColor: 'white',


    },
    actionBar: {
        backgroundColor: 'white',
        flex: 3,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        flex: 3,
        backgroundColor: '#80cbc4',
    },
    button: {
        elevation: 6,
        backgroundColor: 'lime',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    }
});

AppRegistry.registerComponent('Loading', () => Loading);
