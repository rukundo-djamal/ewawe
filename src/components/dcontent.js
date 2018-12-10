import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';
import styles from '../styling/style';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Header, Left, Body, Title, StyleProvider, Button, Thumbnail, Right, Text, } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Noti from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import Icons from "react-native-vector-icons/SimpleLineIcons";

const {
    myfont,
    drwcolor
} = styles;

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login'})
    ]
  });
export default class Dcontent extends Component {

    render() {
        return (
            <Grid>
                <Row size={40} style={[s.one, s.imgcontainer]}>
                    <View style={s.imgcontainer}>
                        <View style={s.thumbnail}><Thumbnail circle large source={require('./../img/Nyanyo.png')} /></View>
                        <Text style={[myfont, s.textcontainer]}>Ewawe</Text>
                    </View>
                </Row>
                <Row size={50} style={s.two}>
                    <ScrollView>
                        <Grid >
                        <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress={() => this.props.navigation.navigate("Home")}>
                                <Row style={s.container}>
                                <Col size={20} style={s.icon}><Back name='calculator' size={24} color={drwcolor.color} /></Col>
                                <Col size={80} style={s.content}>
                                            <Text style={[myfont, drwcolor]}>Calculator</Text>
                                        
                                </Col>
                                </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress={() => this.props.navigation.navigate("Compare")}>
                                <Row style={s.container}>
                                <Col size={20} style={s.icon}><Back name='compare' size={24} color={drwcolor.color} /></Col>
                                <Col size={80} style={s.content}>
                                            <Text style={[myfont, drwcolor]}>Compare Rates</Text>
                                        
                                </Col>
                                </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress={() => this.props.navigation.navigate("Fhouse")}>
                                <Row style={s.container}>
                                <Col size={20} style={s.icon}><Back name='file-find' size={24} color={drwcolor.color} /></Col>
                                <Col size={80} style={s.content}>
                                            <Text style={[myfont, drwcolor]}>Find House</Text>
                                        
                                </Col>
                                </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress={() => this.props.navigation.navigate("Settings")}>
                                <Row style={s.container}>
                                <Col size={20} style={s.icon}><Noti name='notifications' size={24} color={drwcolor.color} /></Col>
                                <Col size={80} style={s.content}>
                                            <Text style={[myfont, drwcolor]}>Notification</Text>
                                </Col>
                                </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress={() => this.props.navigation.navigate("Contactus")}>
                                <Row style={s.container}>
                                <Col size={20} style={s.icon}><Back name='help' size={24} color={drwcolor.color} /></Col>
                                <Col size={80} style={s.content}>
                                            <Text style={[myfont, drwcolor]}>Contact us</Text>
                                </Col>
                                </Row>
                                
                            </TouchableNativeFeedback>
                            </Row>

                        </Grid>
                    </ScrollView>
                </Row>
                <Row size={10} style={styles.two}>
                    <Grid >
                        <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress= { () => this.props.navigation.dispatch(resetAction)}>
                                <Row style={s.container}>
                                    <Col size={20} style={s.icon}><Icons name="logout" size={24} color={drwcolor.color} /></Col>
                                    <Col size={80} style={s.content}>
                                    <Text style={[myfont, drwcolor]}>Sign Out</Text>

                                    </Col>
                                </Row>
                            </TouchableNativeFeedback>
                        </Row>
                    </Grid>
                </Row>
            </Grid>



        );
    }
}


const s = StyleSheet.create({
    one: {
        backgroundColor: '#00796B',
    },
    two: {
        backgroundColor: '#fff',
    },
    imgcontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textcontainer: {
        marginTop: 10,
        color: '#fff'
    },
    iconst: {
        fontSize: 28,
        color: '#1B5E20'
    },
    space: {
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    },
    email: {
        fontSize: 12,
        color: '#fff'
    },
    space: {
        marginBottom: 10
    },
    container: {
        padding: 10
    },
    icon: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    content:
    {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    But: {
        backgroundColor: 'transparent',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    thumbnail:{
        backgroundColor: '#fff',     
        width: 100,
        height: 100,
        borderRadius: 50 ,
        justifyContent: 'center',
        alignItems: 'center',  
    }
});