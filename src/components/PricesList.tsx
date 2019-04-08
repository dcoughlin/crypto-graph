import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Icon } from 'native-base';

import ActivityIndicator from './ActivityIndicator';
import Header from './Header'
import Markets, { Asset } from './Markets';

export interface Props {
  prices: Array<Asset>;
  fetchingPrices: boolean;
  fetchPrices(): Array<Asset>;
}

class PricesList extends React.Component<Props> {

  componentWillMount() {
    this.props.fetchPrices();
  }

  render() {
    return (
     
      <SafeAreaView style={styles.container}>
        {/* <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = {primaryColor} translucent = {false}/> */}
         <Header />
        <ScrollView ref={(scrollable) => {
            this.scrollable = scrollable;
          }}>
          <Markets priceList={this.props.prices} loading={this.props.fetchingPrices}/> 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

function mapStateToProps(state) { 
  return { 
    prices: state.pricesReducer.prices, 
    fetchingPrices: state.pricesReducer.fetchingPrices
  } 
}
function mapStateActionsToProps(dispatch) { 
  return bindActionCreators(Actions, dispatch) 
}

export default connect(mapStateToProps, mapStateActionsToProps)(PricesList);