import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from './components/header/Header';
import Story from './components/story/Story';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Story />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
