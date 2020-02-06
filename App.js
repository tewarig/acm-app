import React, { Component } from "react";
import { StyleSheet, Text, View ,AppRegistry, Dimensions } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import FontAwesome, { Icons,IconTypes,parseIconName } from 'react-native-fontawesome';



import { SliderBox } from "react-native-image-slider-box";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",

      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>GEU ACM </Text>
        <SliderBox
          images={this.state.images}        />
  <View style={{flex: 1, flexDirection: 'row', borderWidth: 2 ,marginTop: '4%'}}>
      <Text style={styles.squarebox}>about acm</Text>
      <Text style={styles.squarebox}>about acm</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', borderWidth: 2 ,marginTop: '5%'}}>
          <Text style={styles.squarebox}>about acm</Text>
          <Text style={styles.reactgularbox}>about acm</Text>
            <Text style={styles.reactgularbox1}>about acm</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', borderWidth: 2 ,marginTop: '4%'}}>
              <Text style={styles.reactgularboxd}>about acm</Text>
              <Text style={styles.reactgularbox1d}>about acm</Text>
              <Text style={styles.reactgularboxd}>about acm</Text>
              <Text style={styles.reactgularbox1d}>about acm</Text>

              </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    color: '#f3f3f3' ,
    backgroundColor: '#D6FFFC',
  } ,
  welcome: {
    fontSize: 30,
    left: '30%' ,
  } ,
  squarebox:{
  color:"black",
  fontSize:11 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 30,
  borderColor: "pink" ,
  borderWidth: 2 ,
  width: '35%',
  height: '100%' ,
  borderRadius: 5,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '6%' ,
},
reactgularbox: {
  color:"black",
  fontSize:10 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5,
  borderColor: "pink" ,
  borderWidth: 2 ,
  width: '15%',
  height: '100%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '6%' ,
},
reactgularbox1: {
  color:"black",
  fontSize:10 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5,
  borderColor: "pink" ,
  borderWidth: 2 ,
  width: '17%',
  height: '100%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '3%' ,
},
reactgularboxd: {
  color:"black",
  fontSize:10 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5,
  borderColor: "pink" ,
  borderWidth: 2 ,
  width: '20%',
  height: '53%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '2%' ,
},
reactgularbox1d: {
  color:"black",
  fontSize:10 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5,
  borderColor: "pink" ,
  borderWidth: 2 ,
  width: '20%',
  height: '53%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '2%' ,
},


});
