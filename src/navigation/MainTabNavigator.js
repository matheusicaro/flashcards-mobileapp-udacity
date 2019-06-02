import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import { ROUTES } from './constants'

const HomeStack = createStackNavigator({
  [ROUTES.HOME.path]: ROUTES.HOME.screen
})

const HowWorkStack = createStackNavigator({
  [ROUTES.HOW_WORK.path]: ROUTES.HOW_WORK.screen
})

const AboutMeStack = createStackNavigator({
  [ROUTES.ABOUT_ME.path]: ROUTES.ABOUT_ME.screen
})

HomeStack.navigationOptions = {
  tabBarLabel: ROUTES.HOME.title,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

HowWorkStack.navigationOptions = {
  tabBarLabel: ROUTES.HOW_WORK.title,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

AboutMeStack.navigationOptions = {
  tabBarLabel: ROUTES.ABOUT_ME.title,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  HowWorkStack,
  AboutMeStack
})
