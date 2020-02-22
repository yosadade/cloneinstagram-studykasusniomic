import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
