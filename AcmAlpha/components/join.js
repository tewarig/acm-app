import React, { Component } from 'react';
import { Button, View, Text ,StyleSheet , TouchableHighlight ,Image , ImageBackground ,Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class join extends Component {
  render() {
    return (
      <View style={styles.container}>

   <TouchableHighlight style={styles.backimg}onPress={() => Linking.openURL('mailto:geuacm@gmail.com?subject=joinacm&body=name: <br> mobileno: <br>sem:<br>course:<br>section')}>
   <ImageBackground source={require('../images/img1.jpeg')}
   style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
 >
   <Text style ={styles.imgtext}> Join Acm </Text>
   </ImageBackground>
 </TouchableHighlight>


        
        <View>

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
