import {
  HomeScreen,
  HowWorkScreen,
  AboutMeScreen,
  AddCardScreen,
  DeckScreen,
  NewDeckScreen,
  QuizScreen } from '../screens'

export const ROUTES = {
  HOME: {
    title: 'Home',
    path: 'Home',
    screen: HomeScreen
  },
  HOW_WORK: {
    title: 'How Work',
    path: 'How Work',
    screen: HowWorkScreen
  },
  ABOUT_ME: {
    title: 'About Me',
    path: 'About Me',
    screen: AboutMeScreen
  },
  ADD_CARD: {
    title: 'Add Card',
    path: 'Add Card',
    screen: AddCardScreen
  },
  DECK: {
    title: 'Deck',
    path: 'Deck',
    screen: DeckScreen
  },
  NEW_DECK: {
    title: 'New Deck',
    path: 'New Deck',
    screen: NewDeckScreen
  },
  QUIZ: {
    title: 'Quiz',
    path: 'Quiz',
    screen: QuizScreen
  }
}
