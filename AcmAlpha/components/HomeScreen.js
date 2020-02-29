// Homescreen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image , AppRegistry, Dimensions , ScrollView  ,ImageBackground ,Button ,  TouchableHighlight,ActivityIndicator
,Linking} from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";


export default class Homescreen extends Component {
  constructor(props) {
   super(props);
  this.state = {
    images: [
      "https://raw.githubusercontent.com/tewarig/Geu-AcmApp-Web/master/review.gif",
      "https://raw.githubusercontent.com/tewarig/stuff/master/poster.jpeg?token=ANC2BP7FXN5WTRQIEKRM2GK6L62WM",
      "https://raw.githubusercontent.com/tewarig/stuff/master/gravity.jpeg?token=ANC2BP5P6XRY7TX56AYGJZC6L62Z6",
       // Network image
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

              <ImageBackground source={require('../images/img1.jpeg')}
              style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={3}
            >
              <Text style ={styles.imgtext}>Join us!!</Text>
              </ImageBackground>
              </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate("study")}>
                <ImageBackground source={require('../images/img2.jpeg')}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Study Material</Text>
                </ImageBackground>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Research")}>
            <ImageBackground source={require('../images/p1.jpg')}
            style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
          >
            <Text style ={styles.imgtext}>Research </Text>
            </ImageBackground>
            </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate("coding")}>
                <ImageBackground source={require('../images/omg3.jpeg')}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Learn coding</Text>
                </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("events")}>
                <ImageBackground source={require('../images/om4.jpeg')}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Events</Text>
                </ImageBackground>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("internship")}>
            <ImageBackground source={require('../images/img5.jpeg')}
            style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
          >
            <Text style ={styles.imgtext}>Interships </Text>
            </ImageBackground>
            </TouchableHighlight>

                <TouchableHighlight onPress={() => Linking.openURL('mailto:geuacm@gmail.com?subject=Feedback')}>
                <ImageBackground source={require('../images/img6.jpg')}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Feedback</Text>
                </ImageBackground>
              </TouchableHighlight>


                <TouchableHighlight onPress={() => this.props.navigation.navigate("clubs")}>
                <ImageBackground source={require('../images/p1.jpg')}
                style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
              >
                <Text style ={styles.imgtext}>Clubs in college</Text>
                </ImageBackground>
              </TouchableHighlight>


                  <TouchableHighlight onPress={() => this.props.navigation.navigate("About")}>
                <ImageBackground source={require('../images/img1.jpeg')}
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
