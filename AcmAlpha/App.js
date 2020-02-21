// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack" ;
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import join from './components/join';
import study from './components/study';
import coding from './components/coding';
import events from './components/events';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  GEUACM: {
    screen: HomeScreen  , },

  About: {
    screen: AboutScreen
  },
  join: {
    screen: join
  },
  study: {
    screen: study
  },
  coding: {
    screen: coding
  },
  events: {
    screen: events
  },


});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
