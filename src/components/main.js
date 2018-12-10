import React, { Component } from 'react';
import { View, TextInput, Picker, Keyboard, ScrollView } from 'react-native';
import styles from '../styling/style';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Icon, Text, Title, StyleProvider } from 'native-base';
import Card from './card';
import Result from './result';

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
    phfont
} = styles;

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { rate: '', category: 'BK', amount: '', other: '', total: 0 };
    }
    onValueChange(key, value) {
        if(value === 'BK'){
            this.setState({ category: value, rate: '15' });
        }
        else if(value === 'BPR'){
            this.setState({ category: value, rate: '12' });
        }
        this.setState({ category: value });
    }
    totcal() {
        const { rate,category, amount,other, total} =this.state;
        let r= parseInt(rate)/100;
        let base = 1+r;
        let exponent = -3;
        let y= -1* parseInt(other);
        let b = 1 - Math.pow(base, y);
        let a = r*parseInt(amount);
        let mpt = a/b;
        let n= parseInt(other)*12
        mpt=mpt/n;
        let value = mpt.toString();
        value=Math.round(value);
        this.setState({total: value});
        Keyboard.dismiss();
    }
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
                            <Title><Text style={[myfont, { color: '#fff', fontSize: 20 }]}>Ewawe</Text></Title>
                        </Body>
                    </Header>

                    <View style={root}>

                        <ScrollView>
                            <View style={headcal}>
                                <Text style={headcaltxt}> Mortgage Calculator </Text>
                            </View>
                            <Card>
                                <View style={cardBody}>
                                
                                    <View style={left}>
                                        <Picker

                                            mode='dropdown'
                                            selectedValue={this.state.category}
                                            onValueChange={this.onValueChange.bind(this, 'category')}
                                        >
                                            <item style={myfont} label='BK' value='BK' />
                                            <item style={myfont} label='BPR' value='BPR' />
                                        </Picker>
                                        <TextInput
                                            style={[{ height: 40, width: 250 }, phfont]}
                                            onChangeText={(rate) => this.setState({ rate })}
                                            placeholder='rate'
                                            value={this.state.rate}
                                        />
                                        <TextInput
                                            style={[{ height: 40, width: 250 }, phfont]}
                                            onChangeText={(amount) => this.setState({ amount })}
                                            placeholder='loan amount'
                                        />
                                        <TextInput
                                            style={[{ height: 40, width: 250 }, phfont]}
                                            onChangeText={(other) => this.setState({ other })}
                                            value={this.state.text}
                                            placeholder='years'

                                        />
                                        

                                    </View>
                                </View>
                                <View style={cardAction}><Button success rounded onPress={ () => this.totcal()}>
                                    <Text style={myfont}>calculate</Text>
                                </Button>
                                </View>

                            </Card>

                            <Result company={this.state.category}>
                            <Text style={[tbfont,{color: 'white'}]}>Monthly paymaent is  {this.state.total}</Text>
                            </Result>
                        </ScrollView>
                    </View>
                </View>

            </StyleProvider>
        );
    }
}


