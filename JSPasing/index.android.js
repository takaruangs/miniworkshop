/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import izanime from './theme/variables/pftaka';
import {Container,StyleProvider} from 'native-base';
import getTheme from './theme/components';
import AppHeader from './src/part/appHeader';
import AppFooter from './src/part/appFooter';
import AppBody from './src/part/appBody';

export default class Pasing extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(izanime)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('Pasing', () => Pasing);
