import React, { Component } from 'react';
import Home from './main';
import Dcontent from './dcontent';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import Compare from './compare';
import Fhouse from './Find';
import Contactus from './contactus';
import Settings from './settings';
import Login from './login';



const MDrawer = DrawerNavigator(
    {
        Home: { screen: Home },
        Compare: { screen: Compare },
        Fhouse: { screen: Fhouse },
        Contactus: { screen: Contactus },
        Settings: { screen: Settings }
    },
    {
        drawerWidth: 280,
        contentComponent: props => <Dcontent {...props} />

    }
);
const Auth = StackNavigator(
    {
        Login: { screen: Login },
        MDrawer: { screen: MDrawer }
    },
    {
        headerMode: 'none'
    }
);

export default class App extends Component {
    render() {

        return (

            <Auth />
        );
    }
}