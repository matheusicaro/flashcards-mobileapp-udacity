import { NEW_DECK } from '../constants'

const actionCreateNewDeck = (newDeck, decks) => {
  return {
    type: NEW_DECK.CREATE_DECK,
    payload: { newDeck, decks }
  }
}

export {
  actionCreateNewDeck
}
