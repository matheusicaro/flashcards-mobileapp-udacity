import { HOME } from './Constants'

export const decks = (state = null, action) => {
  switch (action.type) {
    case HOME.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
