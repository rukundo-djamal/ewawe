import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import styles from '../styling/style';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Icon, Text, Title, StyleProvider } from 'native-base';
import Card from './card';

const {
    root,
    cardHead,
    cardBody,
    cardAction,
    cardHtext,
    left,
    right,
    root1
} = styles;

export default class Fhouse extends Component {
   
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <View style={root1}>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Find House</Title>
                        </Body>
                    </Header>
                    <View style={root}>
                    <Text>comming soon</Text>

                    </View>
                </View>
            </StyleProvider>
        );
    }
}


