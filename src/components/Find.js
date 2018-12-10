import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import style from '../styling/style';
import Content from './content';
import { Container, Header, Left, Body, Right, Button, Icon, Text, Title, StyleProvider } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Modal from 'react-native-modal';
import { Col, Row, Grid, } from "react-native-easy-grid";
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
    headcal,
    headcaltxt,
    myfont,
    mclose,
    mheader,
    mcontent,
    maction,
    tbfont
} = style;

export default class Main extends Component {
    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })
    render() {
        return (
            <View style={styles.container}>
                <StyleProvider style={getTheme(material)}>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title><Text style={[myfont, { color: '#fff', fontSize: 20 }]}>Find a House</Text></Title>
                        </Body>
                    </Header>
                </StyleProvider>
                <Container>
                    <Button style={{ margin: 10, alignSelf: 'flex-end', backgroundColor: '#00796B' }} onPress={this._showModal} rounded ><Text>Filter</Text></Button>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1 }}>
                            <View style={{ margin: 5, padding: 20, flex: 1, backgroundColor: '#fff' }}>
                                <Row size={5} style={mclose}>
                                    <Button style={{ alignItems: 'center', alignSelf: 'center' }} transparent onPress={this._hideModal} ><Back color="#00796B" name="close" size={30} /></Button>
                                </Row>
                                <Row size={10} style={mheader}>
                                    <Text style={myfont}>Compare</Text>
                                </Row>
                                <Row size={75} style={mcontent}>
                                    <Text style={tbfont}>comming soon</Text>
                                </Row>
                                <Row size={10} style={maction}>
                                    <Button style={{ height: 50, width: 100, alignItems: 'center', backgroundColor: '#00796B', justifyContent: 'center', alignSelf: 'center' }} rounded onPress={this._hideModal}><Text style={myfont} >Find</Text></Button>
                                </Row>
                            </View>
                        </View>
                    </Modal>
                    <Content />
                </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f5fe'
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

