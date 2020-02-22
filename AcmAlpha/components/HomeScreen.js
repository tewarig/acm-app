// Homescreen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image , AppRegistry, Dimensions , ScrollView  ,ImageBackground ,Button ,  TouchableHighlight,ActivityIndicator
} from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";


export default class Homescreen extends Component {
  constructor(props) {
   super(props);
  this.state = {
    images: [
      "https://raw.githubusercontent.com/tewarig/Geu-AcmApp-Web/master/review.gif",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
      // require('./assets/images/girl.jpg'),         // Local image
    ]
  };
}

  render() {
    return (
      <ScrollView>
      <SliderBox images={this.state.images} />
  <View>
  <TouchableHighlight onPress={() => this.props.navigation.navigate("join")}>
          {/* onPress={this.}>  */}

              <ImageBackground source={{uri: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
              style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={3}
            >
              <Text style ={styles.imgtext}>Join us!!</Text>
              </ImageBackground>
              </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate("study")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Study Material</Text>
                </ImageBackground>
              </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate("coding")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Learn coding</Text>
                </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("events")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/953847/pexels-photo-953847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Events</Text>
                </ImageBackground>
              </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate("feedback")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/17845/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Feedback</Text>
                </ImageBackground>
              </TouchableHighlight>


                <TouchableHighlight onPress={() => this.props.navigation.navigate("Clubic")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/953847/pexels-photo-953847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Clubs in collage</Text>
                </ImageBackground>
              </TouchableHighlight>


                  <TouchableHighlight onPress={() => this.props.navigation.navigate("About")}>
                <ImageBackground source={{uri: 'https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>About </Text>
                </ImageBackground>
                </TouchableHighlight>

              </View>
   </ScrollView>
    )
  }
}
  const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  } ,
  que:{
    fontWeight: 'bold' ,
    fontSize: 30 ,
    marginTop: '5%' ,
    marginLeft: '7%' ,
  } ,
  text:{
    fontSize: 21,
    padding: '4%',
    marginLeft:'4%',


  },
  container: {
    backgroundColor: '#F7F7F0' ,
  } ,
  welcome: {
    fontSize: 28,
    marginLeft: '30%',
    padding: '1%'
  } ,
  mainimg:{
    height: '100%',
    width: '100%' ,
    color:"black",
    fontSize:18,
    alignItems:"center",
    justifyContent:"center",
        width: '100%',
    height: '100%' ,
    height: 240 ,
  } ,
  manimg:{
    height: '100%',
    width: '98%' ,
    borderRadius: 25 ,
    color:"black",
    fontSize:18,
    alignItems:"center",
    justifyContent:"center",
        width: '96%',
    height: '100%' ,
    borderRadius: 25,
    marginLeft: '4%' ,
    height: 130 ,
    marginTop: '1%'
  } ,
  backimg:{
    height: '100%',
    width: '98%' ,
    borderRadius: 25 ,
    fontSize:18,
    alignItems:"center",
    justifyContent:"center",
        width: '96%',
    height: '100%' ,
    borderRadius: 25,
    marginLeft: '4%' ,
    height: 110 ,
    marginTop: '1%'
  } ,
  squarebox:{
  color:"black",
  fontSize:18,
  alignItems:"center",
  justifyContent:"center",
  borderWidth: 2 ,
  width: '96%',
  height: '100%' ,
  borderRadius: 25,
  textAlign: 'center',
  marginLeft: '2%' ,
  height: 110 ,
  marginTop: '1%'
},
imgtext:{
  color: '#fff' ,
  fontSize: 24 ,
  textAlign: 'left' ,
  fontWeight: 'bold',
} ,
});
