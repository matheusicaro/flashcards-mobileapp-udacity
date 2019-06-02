import { NEW_DECK } from '../Constants'

const actionCreateNewDeck = decks => {
  return {
    type: NEW_DECK.CREATE_DECK,
    payload: decks
  }
}

export {
  actionCreateNewDeck
}
