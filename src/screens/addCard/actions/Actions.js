import { get } from 'lodash'
import { saveItem } from '../../../storage'

import { actionCreatNewCard } from './Types'
import { addCardInDeck, formatToStorage, updateDecks } from '../../../utils'

export const addNewCard = (card, selectedDeck, decks) => dispatch => {
  const oldDeck = get(decks, selectedDeck)
  const newDeck = addCardInDeck(card, oldDeck)
  const updatedDecks = updateDecks(newDeck, decks)

  const dispatchInStore = () => dispatch(actionCreatNewCard(newDeck))

  saveItem(formatToStorage(updatedDecks))
    .then(dispatchInStore)
    .catch(error => console.log('catch api', error)
    )
}
