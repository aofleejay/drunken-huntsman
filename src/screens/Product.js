import React, { Component } from 'react'
import { View, TouchableHighlight, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import ScaledImage from '../components/ScaledImage'

const { width } = Dimensions.get('window')

class Product extends Component {
  render() {
    const { imageUrl } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
        <View style={styles.sectionBorder}>
          <ScaledImage uri={imageUrl} width={width} />
        </View>
        <View style={styles.sectionBorder}>
          <TouchableHighlight style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add To Cart</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  sectionBorder: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  addToCartButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFDD00',
    justifyContent: 'center',
  },
  addToCartText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
})

export default Product
