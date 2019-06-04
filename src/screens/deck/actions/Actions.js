import { saveItem } from '../../../storage'
import { unset as deleteObjetIn } from 'lodash'

import { actionDeleteDeck } from './Types'
import { formatToStorage } from '../../../utils'

export const deleteDeck = (removeDeck, decks) => dispatch => {
  let newDecks = decks
  deleteObjetIn(decks, removeDeck)

  const dispatchInStore = () => dispatch(actionDeleteDeck(newDecks))

  saveItem(formatToStorage(newDecks))
    .then(dispatchInStore)
    .catch(error => console.log('catch api', error)
    )
}
