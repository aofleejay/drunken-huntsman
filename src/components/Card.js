import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableHighlight } from 'react-native'
const { width } = Dimensions.get('window')

class CardItem extends Component {
  render() {
    const { id, name, description, imageUrl, price, isNewArrival, isSale, onPress } = this.props

    return (
      <TouchableHighlight onPress={onPress}>
        <View key={id} style={styles.cardItem}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>{description}</Text>
          <Text style={styles.price}>{`${price} THB`}</Text>
          {
            isNewArrival ?
              <View style={styles.isNewArrivalContainer}>
                <Text style={styles.isNewArrivalText}>New</Text>
              </View>
            : null
          }
          {
            isSale ?
              <View style={styles.isSaleContainer}>
                <Text style={styles.isSaleText}>Sale</Text>
              </View>
            : null
          }
        </View>
      </TouchableHighlight>
    )
  }
}

class Card extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardItem: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    backgroundColor: '#ffffff',
    width: width / 2,
    padding: 10,
  },
  image: {
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 20,
  },
  price: {
    fontSize: 14,
    color: '#00AA00',
    fontWeight: 'bold',
  },
  isNewArrivalContainer: {
    position: 'absolute',
    top: 30,
    backgroundColor: '#FFDD00',
    width: 50,
  },
  isNewArrivalText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  isSaleContainer: {
    position: 'absolute',
    top: 30,
    backgroundColor: '#FF0000',
    width: 50,
  },
  isSaleText: {
    color: '#ffffff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export { CardItem }
export default Card
