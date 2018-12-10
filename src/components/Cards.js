import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import FitImage from 'react-native-fit-image';
export default class Card extends Component {
    render() {
        return (

            <View style={styles.card}>
                <View style={styles.content}>
                    <FitImage
                        source={{ uri: 'https://resources.stuff.co.nz/content/dam/images/1/f/b/v/r/w/image.related.StuffLandscapeSixteenByNine.620x349.1ftv5c.png/1480536731019.jpg' }}/>
                </View>
                <View style={styles.actionBar}>
                    <Text>{this.props.description}</Text>
                </View>

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
        flex: 5,
        padding: 10,
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
        flex: 1.5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        flex: 4.5,
        backgroundColor: '#80d8ff',
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

AppRegistry.registerComponent('Card', () => Card);
