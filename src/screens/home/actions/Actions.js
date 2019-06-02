import { getAllData, getItem, saveItem, STORAGE } from '../../storage'

import { actionInitialData } from './Types'
import DefaultData from '../../../utils/defaultData'

export const initialData = dispatch => {
  getAllData()
    .then(data => {
      if (data.length === 0 || !data.includes(STORAGE.DECKS_KEY)) {
        dispatch(actionInitialData(DefaultData.value))
        const item = { key: DefaultData.key, value: JSON.stringify(DefaultData.value) }
        saveItem(item)
          .catch(error => console.log('ERROR...: saveItem IN initialData ->', error))
      } else {
        getItem(STORAGE.DECKS_KEY)
          .then(item => dispatch(actionInitialData(JSON.parse(item))))
          .catch(error => console.log('ERROR...: getItem IN initialData ->', error))
      }
    })
    .catch(error => {
      console.log('ERROR...: getAllData IN initialData', error)
    })
}
