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

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Noti from 'react-native-vector-icons/MaterialIcons';

const {
    mclose,
    mheader,
    mcontent,
    maction,
    myfont,
    tbfont
   
} = styles;
export default class Dcontent extends Component {

    render() {
        return (
            <Grid>
                <View style={{padding: 50, flex: 1, backgroundColor:'#fff'}}>
                <Row size={5} style={mclose}>
                <Button style={{alignItems:'center',alignSelf:'center'}}transparent><Back color="#00796B" name="close" size={30}/></Button>
                </Row>
                <Row size={10} style={mheader}>
                    <Text style={myfont}>Compare</Text>
                </Row>
                <Row size={75} style={mcontent}>
                <Text style={tbfont}>comming soon</Text>
                </Row>
                <Row size={10} style={maction}>
                <Button style={{height: 50, width:80, alignItems:'center', backgroundColor: '#00796B', justifyContent:'center', alignSelf:'center'}}><Text style={myfont}>Find</Text></Button>
                </Row>
                </View>
            </Grid>
        );
    }
}


