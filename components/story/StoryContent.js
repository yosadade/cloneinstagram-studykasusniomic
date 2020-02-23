import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card, CardItem, Thumbnail} from 'native-base';

export default class StoryContent extends Component {
  render() {
    return (
      <View>
        <Card transparent style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Thumbnail
              source={{
                uri: this.props.uri,
              }}
            />
            <Text numberOfLines={1} style={styles.name}>
              {this.props.name}
            </Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 90,
    width: 90,
  },
  cardItem: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 12
  }
});
