import React, { Component } from 'react';
import { View, TextInput, Picker, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styling/style';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Icon, Text, Title, StyleProvider } from 'native-base';
import Card from './card';
import RateCard from './ratecard';
import { Col, Row, Grid, } from "react-native-easy-grid";
import Modal from 'react-native-modal';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';


const {
    root,
    cardHead,
    cardBody,
    cardAction,
    cardHtext,
    left,
    right,
    root1,
    mclose,
    mheader,
    mcontent,
    maction,
    myfont,
    tbfont
} = styles;

export default class Compare extends Component {
    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })
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
                        <Text style={[myfont, { color: '#fff', fontSize: 20 }]}>Compare Rates</Text>
                        </Body>
                    </Header>
                    <Container>
                        <Button style={{margin:10, alignSelf: 'flex-end', backgroundColor: '#00796B'}} onPress={this._showModal} rounded ><Text>Filter</Text></Button>
                        <Modal isVisible={this.state.isModalVisible}>
                            <View style={{ flex: 1 }}>
                            <View style={{ margin:5, padding: 20,flex: 1, backgroundColor:'#fff'}}>
                            <Row size={5} style={mclose}>
                            <Button style={{alignItems:'center',alignSelf:'center'}} transparent onPress={this._hideModal} ><Back color="#00796B" name="close" size={30}/></Button>
                            </Row>
                            <Row size={10} style={mheader}>
                                <Text style={myfont}>Compare</Text>
                            </Row>
                            <Row size={75} style={mcontent}>
                            <Text style={tbfont}>comming soon</Text>
                            </Row>
                            <Row size={10} style={maction}>
                            <Button style={{height: 50, width:100, alignItems:'center', backgroundColor: '#00796B', justifyContent:'center', alignSelf:'center'}} rounded onPress={this._hideModal}><Text style={myfont} >Find</Text></Button>
                            </Row>
                            </View>
                            </View>
                        </Modal>
                        <ScrollView>
                            <RateCard rate='10%' mcost="100000" type="Tracker"/>
                            <RateCard rate='10%'  mcost="120000" type="Fixed"/>
                            <RateCard rate='10%' mcost="180000" type="Tracker"/>
                            <RateCard rate='10%' mcost="160000" type="Fixed"/>
                            <RateCard rate='10%' mcost="140000" type="Tracker"/>
                            <RateCard rate='10%' mcost="360000" type="Fixed"/>

                        </ScrollView>
                    </Container>
                </View>
            </StyleProvider>
        );
    }
}


