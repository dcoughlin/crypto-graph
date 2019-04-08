import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Left, Right, Body } from 'native-base';
import { Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Left>
          <Text> Pair</Text>
        </Left>
        <Body>
          <Text>Price</Text>
        </Body>
        <Right>
          <Text>Volume </Text>
          </Right>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
});