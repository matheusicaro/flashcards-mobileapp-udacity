import { DECK } from '../../../constants'

const actionDeleteDeck = decks => {
  return {
    type: DECK.ON_PRESS.DELETE_CARD,
    payload: decks
  }
}

export {
  actionDeleteDeck
}
