import { HOME } from './constants'

export const home = (state = null, action) => {
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
