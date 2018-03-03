import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import ScaleImage from '../components/ScaledImage'
import { newsItems } from '../mocks'

const { width } = Dimensions.get('window')

class Feed extends Component {
  render() {
    return (
      <View>
        {
          newsItems.map(newsItem => <ScaleImage key={newsItem.id} uri={newsItem.uri} width={width} />)
        }
      </View>
    )
  }
}

export default Feed
