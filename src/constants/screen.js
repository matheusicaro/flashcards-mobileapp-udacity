import { ADD_NEW_DECK, INITIAL_DATA, ADD_NEW_CARD, DELETE_CARD } from './Reducers'

export const QUIZ = {
  ON_PRESS: {
    CORRECT: 'CORRECT',
    INCORRET: 'INCORRET'
  }
}

export const NEW_DECK = {
  CREATE_DECK: ADD_NEW_DECK
}

export const HOME = {
  INITIAL_DATA: INITIAL_DATA,
  ON_PRESS: {
    ADD_NEW_DECK: 'ADD_NEW_DECK',
    NAVIGATE_TO_CARD: 'NAVIGATE_TO_CARD'
  }
}

export const DECK = {
  ON_PRESS: {
    ADD_NEW_CARD,
    START_QUIZ: 'START_QUIZ',
    DELETE_CARD
  }
}

export const ADD_CARD = {
  ON_PRESS: {
    ADD_NEW_CARD: ADD_NEW_CARD
  }
}
