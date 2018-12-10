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
    tbfont,
    cardboxresult,
} = styles;
export default class Result extends Component {

    render() {
        return (
            <View style={[welcome,{padding:5}]}>
                <Grid>
                    <Row >
                        <Col style={content} size={100}>
                            <Row style={contentbox}>
                                <Col style={cardboxresult} size={1}>
                                <Text style={[tbfont,{color: 'white'}]}>In {this.props.company}  according to your preffered input</Text>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col style={[cardboxresult,{padding:10}]} size={1}>
                                <Text style={[tbfont,{color: 'white'}]}>{this.props.children}</Text>                                
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Grid>
            </View>
        );
    }
}


