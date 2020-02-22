// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack" ;
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import About from './components/About';
import join from './components/join';
import study from './components/study';
import coding from './components/coding';
import events from './components/events';
import feedback from './components/feedback';
import clubic from './components/clubic';
import notes from './components/notes';
import ebook from './components/ebook';
import certificates from './components/certificates';
import workshop from './components/workshop';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  GEUACM: {
    screen: HomeScreen  , },

  About: {
    screen: About
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
  feedback: {
    screen: feedback
  },
  clubs: {
    screen: clubic
  },
  notes: {
    screen: notes
  },
  ebook: {
    screen: ebook
  },
  
  workshop :{
    screen: workshop
  },
  certificates:{
    screen: certificates
  }


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
