import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SampleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        backgroundColor:"red"
      }}>
        <Text> SampleScreen </Text>
      </View>
    );
  }
}
