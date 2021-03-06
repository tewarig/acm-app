import React, { Component } from 'react';
import { Button, View, Text ,StyleSheet , TouchableHighlight ,Image , ImageBackground ,WebView ,Linking} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class study extends Component {
  render() {
    return (
      <View>
      <TouchableHighlight style={styles.backimg} onPress={() => this.props.navigation.navigate("notes")}>
            <ImageBackground source={require('../images/img1.jpeg')}
            style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={4}
          >
            <Text style ={styles.imgtext}>Notes</Text>
            </ImageBackground>
            </TouchableHighlight>

            <TouchableHighlight style={styles.backimg}onPress={() => this.props.navigation.navigate("ebook")}>
            <ImageBackground source={require('../images/img5.jpeg')}
            style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
          >
            <Text style ={styles.imgtext}>E-books </Text>
            </ImageBackground>

          </TouchableHighlight>
          <TouchableHighlight style={styles.backimg}onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSc_8yGZIQzjarUgLkJHJQv5zyPWQrJL5x4lnht19xyPw7ONig/viewform?usp=sf_link')}>
          <ImageBackground source={require('../images/img2.jpeg')}
          style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
        >
          <Text style ={styles.imgtext}>Submit Your Notes </Text>
          </ImageBackground>

        </TouchableHighlight>
        <TouchableHighlight style={styles.backimg}onPress={() => Linking.openURL('https://github.com/tewarig/acm-app/issues')}>
        <ImageBackground source={require('../images/p1.jpg')}
        style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2.1}
      >
        <Text style ={styles.imgtext}>Report a Issue </Text>
        <Text style={styles.imgtextq}>Get Goodies</Text>
        </ImageBackground>

      </TouchableHighlight>
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
imgtextq:{
  color: '#fff' ,
  fontSize: 17 ,
  textAlign: 'left' ,
  fontWeight: 'bold',
} ,
});
