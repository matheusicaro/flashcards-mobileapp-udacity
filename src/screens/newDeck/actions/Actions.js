import { saveItem } from '../../../storage'

import { actionCreateNewDeck } from './Types'
import { formatToStorage } from '../../../utils'

export const createDeck = (newDeck, decksList) => dispatch => {
  const newDeckList = Object.assign(decksList, newDeck)
  const decks = formatToStorage(newDeckList)

  const dispatchInStore = () => dispatch(actionCreateNewDeck(newDeck, decks))

  saveItem(decks)
    .then(dispatchInStore)
    .catch(error => console.log('catch api', error)
    )
}
