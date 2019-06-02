import { AsyncStorage } from 'react-native'

import STORAGE from './Constants'

export const getAllData = () => {
  return AsyncStorage.getAllKeys()
}

export const getItem = (item) => {
  return AsyncStorage.getItem(item)
}

export const saveItem = (item) => {
  return AsyncStorage.setItem(item.key, item.value)
}

export {
  STORAGE
}
