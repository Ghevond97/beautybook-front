import React, { Component } from 'react';

import { StyleSheet, View, Image } from 'react-native'

class SectionCard extends Component {
  render() {
    return(
      <View style={StyleSheet.card}>

      </View>      
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marigin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8, 
  }
})