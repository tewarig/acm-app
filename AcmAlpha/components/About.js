import React, { Component } from 'react';
import { StyleSheet ,Button, View, Text,TouchableHighlight ,ImageBackground, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class About extends Component {
  render() {
    return (
   <View>
   <TouchableHighlight onPress={() => navigation.navigate("Soon")}>
     {/* onPress={this.}>  */}
         <ImageBackground source={{uri: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
         style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={3}
       >
         <Text style ={styles.imgtext}>Geu Acm Team</Text>
         </ImageBackground>
         </TouchableHighlight>
         <View>
        <Text style={{marginTop:'134%' , marginLeft:'29%'}}>
         Proudly Build on  <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
         style={{width: 20, height: 30 ,borderRadius: 25}} />

         </Text>
         </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f0",
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
