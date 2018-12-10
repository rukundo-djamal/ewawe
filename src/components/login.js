import React, { Component } from 'react';
import { View, TextInput, Picker, Keyboard, ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import styles from '../styling/style';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Text, Title, StyleProvider, Thumbnail } from 'native-base';
import Card from './card';
import Result from './result';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {
    root,
    cardHead,
    cardBody,
    cardAction,
    cardHtext,
    left,
    right,
    root1,
    headcal,
    headcaltxt,
    myfont,
    tbfont,
    phfont,
    authform,
    authbtn,
    authinput,
    authregister,
    authviewtbtn,
    authbtns
} = styles;

export default class Main extends Component {

    render() {
        return (
            <Grid style={{backgroundColor: '#F5F5F5'}}>
                <Row size={30} >
                    <Col style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Thumbnail circle large source={require('./../img/Nyanyo.png')} />
                    <Text style={[{ color: '#00796B' }, myfont]}>Own Your Home</Text>
                    </Col>
                </Row>
                <Row size={70}>
                    <Col>
                    <ScrollView style={{flex: 1}}>
                        <Row size={93}>
                            <Col style={authform}>
                                <Text style={{ marginLeft: 50, marginBottom: 30, fontWeight: 'bold', fontSize: 18, color: '#00796B', fontFamily:'Ubuntu-Bold' }}>Sign in</Text>
                                <TextInput
                                    style={authinput}
                                    placeholder="E-mail"

                                />
                                <TextInput
                                    style={authinput}
                                    placeholder="Password"
                                    secureTextEntry={true}

                                />
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#F5F5F5')} delayPressIn={0} onPress={() => this.props.navigation.navigate("MDrawer")} >
                                    <View style={authbtn}>
                                        <Text style={[{ color: '#00796B' }, myfont]}>Sign in</Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <View style={authviewtbtn}>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#F5F5F5')} delayPressIn={0} >
                                        <View style={authbtns}>
                                            <Icon name='google-plus' size={24} color="#00796B" />
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#F5F5F5')} delayPressIn={0} >
                                        <View style={authbtns}>
                                            <Icon name='linkedin' size={24} color="#00796B" />
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>

                            </Col>
                        </Row>
                        <Row size={7} style={{marginTop: 10}}>
                            <Col><Text style={[{ alignSelf: 'center', color: '#00796B' }, myfont]}>Don't Have An Account ?</Text></Col>
                            <Col style={{ marginRight: 15 }}><Text style={[{ alignSelf: 'flex-end', color: '#00796B' }, myfont]}>Forgot Password</Text></Col>
                        </Row>
                        </ScrollView>
                    </Col>
                    
                </Row>
            </Grid>
            
        );
    }
}


