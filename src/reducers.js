import { INITIAL_DATA, ADD_NEW_DECK, ADD_NEW_CARD, DELETE_CARD } from './constants'
import { updateDecks } from './utils'

let newState

export const decks = (state = null, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case ADD_NEW_DECK:
      newState = JSON.parse(action.payload.decks)
      return {
        ...newState
      }
    case ADD_NEW_CARD:
      newState = updateDecks(action.payload, state)
      return {
        ...newState
      }
    case DELETE_CARD:
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default {
  decks
}
