import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import styles from '../styling/style';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Icon, Text, Title, StyleProvider } from 'native-base';
import Card from './card';
import {Grid, Col, Row} from 'react-native-easy-grid';

const {
    root,
    cardHead,
    cardBody,
    cardAction,
    cardHtext,
    left,
    right,
    root1, 
    myfont
} = styles;

export default class Contactus extends Component {

    render() {
        return (
            <Grid>
                <Row size={100} style={styles.one}>
                    <StyleProvider style={getTheme(material)}>
                        <Container>
                            <Col size={8}>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                            <Icon name='menu' color='white' size={24} />
                                        </Button>
                                    </Left>
                                    <Body >
                                        <Title style={myfont} >Contact us</Title>
                                    </Body>
                                </Header>
                            </Col>
                            <Col size={92}>
                                <Row  >
                                    <Col>
                                        <Row style={{ height: 60, elevation: 2, backgroundColor: 'transparent', padding: 10 }}>
                                            <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                                                <Text style={myfont} >Email us on</Text>
                                            </Col>
                                            <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                                                <Text style={myfont} note>help@Ewawe.com</Text>
                                            </Col>
                                        </Row>
                                        <Row style={{ height: 60, elevation: 2, backgroundColor: 'transparent', padding: 10 }}>
                                            <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                                                <Text style={myfont}>Version</Text>
                                            </Col>
                                            <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                                                <Text style={myfont} note>1.0.0</Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Container>
                    </StyleProvider>

                </Row>

            </Grid>
        );
    }
}


