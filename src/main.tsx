/**
 * CrytpoGraph: A React Native App
 * written by: Dan Coughlin 
 * 
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pricesReducer from './reducers/prices';

import PricesList from './components/PricesList';

let store = createStore(combineReducers({ pricesReducer }), applyMiddleware(thunk));

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PricesList />
      </Provider>
    )
  }
}