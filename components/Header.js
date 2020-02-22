import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {Icon} from 'native-base';

export default class Header1 extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={false}
        />
        <View style={styles.container}>
          <Icon name="md-camera" style={styles.icon} />
          <Text style={styles.title}>Instagram</Text>
          <Icon name="md-paper-plane" style={styles.icon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    color: 'grey',
  },
});
