import { createStackNavigator } from 'react-navigation'
import { ROUTES } from './constants'

export const AddCardStack = createStackNavigator({
  [ROUTES.ADD_CARD.path]: ROUTES.ADD_CARD.screen
})

export const DeckStack = createStackNavigator({
  [ROUTES.DECK.path]: ROUTES.DECK.screen
})

export const NewDeckStack = createStackNavigator({
  [ROUTES.NEW_DECK.path]: ROUTES.NEW_DECK.screen
})

export const QuizStack = createStackNavigator({
  [ROUTES.QUIZ.path]: ROUTES.QUIZ.screen
})

export const HomeStack = createStackNavigator({
  [ROUTES.HOME.path]: ROUTES.HOME.screen
})
