import { saveItem } from '../../../storage'

import { actionCreateNewDeck } from './Types'
import { createNewDeck } from '../../../utils'

export const createDeck = (newDeck, decksList) => dispatch => {
  const newDeckList = Object.assign(decksList, newDeck)
  const decks = createNewDeck(newDeckList)
  const dispatchInStore = () => dispatch(actionCreateNewDeck(decks))

  saveItem(decks)
    .then(dispatchInStore)
    .catch(error => console.log('catch api', error)
    )
}
