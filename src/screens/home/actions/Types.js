import { HOME } from '../constants'

const actionInitialData = decks => {
  return {
    type: HOME.INITIAL_DATA,
    payload: decks
  }
}

export {
  actionInitialData
}
