import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


class LaunchScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#9F83D8', '#1CF4F1']} style={styles.linearGradient}>
      <Image 
        source={require('../../assets/images/logo.png')}
      /> 
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default LaunchScreen;