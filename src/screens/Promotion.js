import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Card, { CardItem } from '../components/Card'
import { products } from '../mocks'

class Promotion extends Component {
  render() {
    return (
      <ScrollView>
        <Card>
          {
            products.map(({ id, name, description, imageUrl, price, isNewArrival, isSale }) => (
              <CardItem
                key={id}
                name={name}
                description={description}
                imageUrl={imageUrl}
                price={price}
                isNewArrival={isNewArrival}
                isSale={isSale}
                onPress={() => this.props.navigation.navigate('Product', { name, imageUrl })}
              />
            ))
          }
        </Card>
      </ScrollView>
    )
  }
}

export default Promotion
