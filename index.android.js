/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Main from './src/components/root';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAGTDkdgoW9VGtHi8RJCTGtA2Gx1sXroBc",
  authDomain: "ewawe-90f38.firebaseapp.com",
  databaseURL: "https://ewawe-90f38.firebaseio.com",
  projectId: "ewawe-90f38",
  storageBucket: "ewawe-90f38.appspot.com",
  messagingSenderId: "76832940976"
};
firebase.initializeApp(config);

export default class Ewawe extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();

  }
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Ewawe', () => Ewawe);
