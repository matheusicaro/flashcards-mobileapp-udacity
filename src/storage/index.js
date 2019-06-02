import { AsyncStorage } from 'react-native'

export const getAllData = () => {
  return AsyncStorage.getAllKeys()
}

export const getItem = (item) => {
  return AsyncStorage.getItem(item)
}

export const saveItem = (item) => {
  return AsyncStorage.setItem(item.key, item.value)
}
