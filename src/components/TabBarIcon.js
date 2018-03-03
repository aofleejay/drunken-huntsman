import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

class TabBarIcon extends Component {
  render() {
    return <Icon name={this.props.name} size={30} color="#AAAAAA" />
  }
}

export default TabBarIcon
