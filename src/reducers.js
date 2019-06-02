import { INITIAL_DATA, ADD_NEW_DECK } from './constants'

export const decks = (state = null, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case ADD_NEW_DECK:
      const newState = JSON.parse(action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}

export default {
  decks
}
