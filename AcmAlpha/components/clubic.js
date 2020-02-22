import react , {Component}from 'react';
import {StyleSheet , Image ,ImageBackground ,TouchableHighlight  } from 'react-native' ;
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class  clubic extends Component {
  render(){
    return(
      <View>
  <TouchableHighlight  >
    {/* onPress={this.}>  */}
        <ImageBackground source={{uri: 'https://raw.githubusercontent.com/tewarig/Geu-AcmApp-Web/master/Letcode.jpeg' }}
        style={styles.manimg} imageStyle={{ borderRadius: 25 }}
      >

        </ImageBackground>
        </TouchableHighlight>
  <TouchableHighlight  >
    {/* onPress={this.}>  */}
        <ImageBackground source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS17018rElLcAWAKqGLXin8qhExzNaE7l5R9rLOUp_0MmWABE1x' }}
        style={styles.backimg} imageStyle={{ borderRadius: 25 }} blurRadius={2}
      >
      <Text style={styles.imgtext}>Start Your Own CLub </Text>
        </ImageBackground>
        </TouchableHighlight>

     </View>
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
