import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Left, Right, Body } from 'native-base';
import { Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Pair</Text>
        <Body>
          <Text>Price</Text>
        </Body>
        <Text style={styles.headerText}>Volume</Text>
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
  headerText: {
    padding: 20
  }
});