import { HOME } from '../Constants'

const actionInitialData = decks => {
  return {
    type: HOME.INITIAL_DATA,
    payload: decks
  }
}

export {
  actionInitialData
}
