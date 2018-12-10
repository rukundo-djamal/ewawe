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
    myfont,
    drwcolor,
    welcome,
    icon,
    content,
    contentbox,
    cardbox,
    cardtable,
    list,
    circleicon,
    tbfont
} = styles;
export default class RateCard extends Component {

    render() {
        return (
            <View style={list}>
            <Grid>
                <Row style={welcome}>
                <Col style={icon} size={25}>
                    <View style={circleicon}>
                        <Back name="bank" color='white'size={50}/>
                    </View>
                </Col>
                <Col style={content} size={75}>
                <Row style={contentbox}>
                <Col style={cardbox} size={1}>
                <Row style={cardtable} size={40}><Text style={[tbfont,myfont,{color: 'white'}]}>Rate</Text></Row>
                <Row style={cardtable} size={60}><Text style={[tbfont,{color: 'white'}]}>{this.props.rate}</Text></Row>
                </Col>
                <Col style={cardbox} size={1}>
                <Row style={cardtable} size={40}><Text style={[tbfont,myfont,{color: 'white'}]}>Monthly Cost</Text></Row>
                <Row style={cardtable} size={60}><Text style={[tbfont,{color: 'white'}]}>{this.props.mcost}</Text></Row>
                </Col>
                <Col style={cardbox} size={1}>
                <Row style={cardtable} size={40}><Text style={[tbfont,myfont,{color: 'white'}]}>Type of Mortgages</Text></Row>
                <Row style={cardtable} size={60}><Text style={[tbfont,{color: 'white'}]}>{this.props.type }</Text></Row>
                </Col>
                </Row>
                </Col>
                </Row>
                
            </Grid>
            </View>
        );
    }
}


