import React, {Component} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import StoryContents from './StoryContent';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStory: [
        {
          name: 'Your Story',
          uri: 'https://lh3.googleusercontent.com/proxy/Ff8lyMv3FOb4qm1dAgmTCBKFTnZq1-fRbJHZMECtbC6s9J_eAO12_iWqqgs4sFNuxMhluaj4HKK80X7WMNTKY88vsbmc96Ywvl876wCtedUm2IW5qc8Iwi_AB2Xt9ZJfJxYAh4-pUBnv0n9z2nNH0dlTQVnMABNTgHEjJfqD',
        },
        {
          name: 'Gryan',
          uri: 'https://cdn.hswstatic.com/gif/black-cats-unlucky-1.jpg',
        },
        {
          name: 'Indahhw',
          uri: 'https://cdn.hswstatic.com/gif/black-cats-unlucky-1.jpg',
        },
        {
          name: 'Asr13',
          uri: 'https://cdn.hswstatic.com/gif/black-cats-unlucky-1.jpg',
        },
        {
          name: 'Asr13',
          uri: 'https://cdn.hswstatic.com/gif/black-cats-unlucky-1.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          horizontal
          data={this.state.dataStory}
          renderItem={({item}) => {
            return (
              <StoryContents
                name={item.name}
                uri={item.uri}
                navigation={this.props.navigation}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Story

const darkStyles = StyleSheet.create({})