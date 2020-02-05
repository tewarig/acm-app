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
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
