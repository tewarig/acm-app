import React, { Component } from "react";
import { StyleSheet, Text, View ,AppRegistry, Dimensions } from "react-native";
import { DrawerNavigator } from 'react-navigation';

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
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
       <Text style={styles.bo1}>Forgot Password?</Text>
        <Text style={styles.bo2}>Forgot Password?</Text>
         <Text style={styles.bo3}>Forgot Password?</Text>
          <Text style={styles.bo3}>Forgot Password?</Text>
           <Text style={styles.bo4}>Forgot Password?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } ,
  welcome: {
    fontSize: 30,
    left: '30%' ,
  } ,
  bo1:{
  color:"black",
  fontSize:11 ,
  alignItems:"center",
  justifyContent:"center",
  padding: 5 ,
  height: 25 ,
  borderColor: "pink" ,
  borderWidth: 2 ,
},

});
