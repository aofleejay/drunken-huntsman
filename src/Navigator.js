import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import {
  Feed,
  NewArrival,
  BestSeller,
  Promotion,
  Search,
  Cart,
  More,
  Product,
} from './screens'
import TabBarIcon from './components/TabBarIcon'

const HomeTabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: { title: 'Feed' },
  },
  NewArrival: {
    screen: NewArrival,
    navigationOptions: { title: 'New Arrival' },
  },
  BestSeller: {
    screen: BestSeller,
    navigationOptions: { title: 'Best Seller' },
  },
  Promotion: {
    screen: Promotion,
    navigationOptions: { title: 'Promotion' },
  },
}, {
  ...TabNavigator.Presets.AndroidTopTabs,
  initialRouteName: 'Feed',
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    headerTitle: 'Beer Brother'
  },
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: '#777777',
    inactiveTintColor: '#AAAAAA',
    style: {
      backgroundColor: '#FFFFFF',
    },
    tabStyle: {
      height: 40,
    },
    labelStyle: {
      fontSize: 11,
    },
  },
})

const AppTabs = TabNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: ({ tabBarIcon: <TabBarIcon name="home" /> }),
  },
  Search: {
    screen: Search,
    navigationOptions: ({ tabBarIcon: <TabBarIcon name="search" /> }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({ tabBarIcon: <TabBarIcon name="shopping-cart" /> }),
  },
  More: {
    screen: More,
    navigationOptions: ({ tabBarIcon: <TabBarIcon name="ellipsis-h" /> }),
  },
}, {
  ...TabNavigator.Presets.iOSBottomTabs,
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions: { showLabel: false }
})

export default StackNavigator({
  Home: { screen: AppTabs },
  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.name,
      headerStyle: {
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#EFEFEF',
      },
    }),
  }
}, {
  mode: 'modal',
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#FFFFFF',
    },
  },
})
