import React from 'react'
import { Provider } from 'react-redux'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import {
  ROUTES,
  HomeStack,
  AddCardStack,
  DeckStack,
  NewDeckStack,
  QuizStack } from './navigation'

import Store from './Store'

const Navigation = createAppContainer(createSwitchNavigator({
  [ROUTES.HOME.title]: HomeStack,
  [ROUTES.ADD_CARD.title]: AddCardStack,
  [ROUTES.DECK.title]: DeckStack,
  [ROUTES.NEW_DECK.title]: NewDeckStack,
  [ROUTES.QUIZ.title]: QuizStack
}))

export class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}
