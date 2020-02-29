// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack" ;
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import About from './components/About';
import join from './components/join';
import study from './components/Study';
import coding from './components/Coding';
import events from './components/Events';
import feedback from './components/feedback';
import notes from './components/notes';
import ebook from './components/ebook';
import certificates from './components/certificates';
import workshop from './components/workshop';
import joinACM from './components/joinACM';
import joinSIG from './components/joinSIG';
import team from './components/team';
import recent from './components/recent';
import internship from './components/Internship';
import clubs from './components/Clubs';
import yash from './components/Yash_Arora';
import gaurav from './components/gaurav';
import noobtodev from './components/NoobtoDev';
import github from './components/github';
import summit from './components/summit';
import feeback from './components/Feedback';
import reseach from './components/Research';


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
  Study: {
    screen: study
  },
  Coding: {
    screen: coding
  },
  Events: {
    screen: events
  },
  feedback: {
    screen: feedback
  },
  Clubs: {
    screen: clubs
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
  },
  joinACM:{
    screen: joinACM
  },
  joinSIG:{
    screen:joinSIG
  },
  team: {
    screen: team
  },
  recent:{
    screen:recent
  },
  Internship:{
    screen:internship
  },
  Yash_Arora:{
    screen: yash
  },
  Feedback:{
    screen:feedback
  },
  gaurav: {
    screen:gaurav
  },
  NoobtoDev: {
    screen: noobtodev
  },
  github: {
    screen: github
  },
  summit: {
    screen:summit
  },
  Research: {
    screen: reseach
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
