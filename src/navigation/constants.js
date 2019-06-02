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
    title: 'Home Screen',
    path: 'Home',
    screen: HomeScreen
  },
  HOW_WORK: {
    title: 'How Work Screen',
    path: 'How Work',
    screen: HowWorkScreen
  },
  ABOUT_ME: {
    title: 'About Me Screen',
    path: 'About Me',
    screen: AboutMeScreen
  },
  ADD_CARD: {
    title: 'Add Card Screen',
    path: 'Add Card',
    screen: AddCardScreen
  },
  DECK: {
    title: 'Deck Screen',
    path: 'Deck',
    screen: DeckScreen
  },
  NEW_DECK: {
    title: 'New Deck Screen',
    path: 'New Deck',
    screen: NewDeckScreen
  },
  QUIZ: {
    title: 'Quiz Screen',
    path: 'Quiz',
    screen: QuizScreen
  }
}
