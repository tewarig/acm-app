import React, { Component } from 'react';
import { Button, View, Text ,StyleSheet , TouchableHighlight ,Image , ImageBackground ,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebView } from 'react-native-webview';


export default class yash extends Component {
  constructor(props) {
   super(props);
   this.state = { visible: true };
 }

 hideSpinner=()=> {
   this.setState({ visible: false });
 }
 showSpinner=()=> {
   this.setState({ visible: true });
 }

 render() {
   return (
     <View style={{ flex: 1 }}>
       <WebView
         onLoadStart={() => (this.showSpinner())}
         onLoad={() => this.hideSpinner()}
         style={{ flex: 1 }}
         source={{ uri: 'https://arora-yash.github.io/' }}
       />
       {this.state.visible && (
         <ActivityIndicator
           style={{
           flex: 1,
           left: 0,
           right: 0,
           top: 0,
           bottom: 0,
           position: 'absolute',
           alignItems: 'center',
           justifyContent: 'center' }}
           size="large"
         />
       )}
     </View>
   );
 }
}
