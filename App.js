import React, { Component } from 'react'
import {StyleSheet,View,Text} from 'react-native';
export default class SwitchExample extends Component
{
  state = {
    myState: "this is frist app"
  }
  updateState = () => this.setState({myState:"ohm!!! 1st click"})
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: 'blue', flex: 0.3}} />
                <View style={{backgroundColor: 'red', flex: 0.5}} />
                <Text style={{fontSize: 18, flex: 0.2 }} onPress={this.updateState}>{this.state.myState}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create ({
     container: {
         flex: 1,
         flexDirection: 'row',
         height: 100,
         width: "80%",
         backgroundColor:"#fff"
     }
})
