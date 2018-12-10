import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, FlatList
} from 'react-native';
import Card from './Cards';
import Loading from './loading';
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
_keyExtractor = (item, index) => item.title;
  render() {
    if (this.state.isLoading) {
      return (
          <Loading />
      );
    }
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) => <Card  description={item.title} image />}
        style={styles.body}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1'
  },
  appbar: {
    flex: 0.5,
    backgroundColor: '#009688',
    elevation: 4,
  },
  body: {
    padding: 8,
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

AppRegistry.registerComponent('Content', () => Content);
