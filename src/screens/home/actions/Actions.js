import { getAllData, getItem, saveItem } from '../../../storage'

import { actionInitialData } from './Types'
import { DefaultData, createNewDeck, DECKS_KEY } from '../../../utils'

export const initialData = dispatch => {
  getAllData()
    .then(data => {
      if (data.length === 0 || !data.includes(DECKS_KEY)) {
        dispatch(actionInitialData(DefaultData.value))
        const initialDecks = createNewDeck(DefaultData.value)
        saveItem(initialDecks)
          .catch(error => console.log('ERROR...: saveItem IN initialData ->', error))
      } else {
        getItem(DECKS_KEY)
          .then(item => dispatch(actionInitialData(JSON.parse(item))))
          .catch(error => console.log('ERROR...: getItem IN initialData ->', error))
      }
    })
    .catch(error => {
      console.log('ERROR...: getAllData IN initialData', error)
    })
}
