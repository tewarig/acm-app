import React, { Component } from "react";
import { StyleSheet, Text, View ,AppRegistry, Dimensions } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import FontAwesome, { Icons,IconTypes,parseIconName } from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';






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
          images={this.state.images}/>
  <View style={{flex: 1, flexDirection: 'row',marginTop: '4%'}}>
  <LinearGradient
    colors={['#F5FCFF', '#B7E9F7', '#7AD7F0']}
    style={styles.squarebox}>
      <Text>about acm</Text>
        </LinearGradient>
  <LinearGradient
    colors={['#F5FCFF', '#B7E9F7', '#7AD7F0']}
    style={styles.squarebox}>
      <Text>about acm</Text>
        </LinearGradient>
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginTop: '5%'}}>
      <LinearGradient
        colors={['#A7E7FE', '#F0FEFF', '#A0FFA0']}
        style={styles.squarebox}>
          <Text>about acm</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#A7E7FE', '#F0FEFF', '#A0FFA0']}
            style={styles.reactgularbox}>
              <Text>about acm</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#A7E7FE', '#F0FEFF', '#A0FFA0']}
                style={styles.reactgularbox}>
                  <Text>about acm</Text>
                  </LinearGradient>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop: '4%'}}>
          <LinearGradient
            colors={['#B5FACB', '#F0F4DC', '#57C0F9']}
            style={styles.reactgularbox1d}>
              <Text>about acm</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#B5FACB', '#F0F4DC', '#57C0F9']}
                style={styles.reactgularbox1d}>
                  <Text>about acm</Text>
                  </LinearGradient>
                  <LinearGradient
                    colors={['#B5FACB', '#F0F4DC', '#57C0F9']}
                    style={styles.reactgularbox1d}>
                      <Text>about acm</Text>
                      </LinearGradient>
                      <LinearGradient
                        colors={['#B5FACB', '#F0F4DC', '#57C0F9']}
                        style={styles.reactgularbox1d}>
                          <Text>about acm</Text>
                          </LinearGradient>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    color: '#f3f3f3' ,
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
  borderColor: "white" ,
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
  borderColor: "white" ,
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
  borderWidth: 2 ,
  width: '20%',
  height: '53%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '3%' ,
},
reactgularbox1d: {
  color:"black",
  fontSize:10 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5,
  width: '20%',
  height: '53%' ,
  borderRadius: 9,
  backgroundColor: '#9b59b6' ,
  textAlign: 'center',
  marginLeft: '3.5%' ,
},


});
