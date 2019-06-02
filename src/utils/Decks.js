import { set as updateObjectProperty } from 'lodash'

export const DECKS_KEY = 'decks'

export const formatToStorage = (values) => {
  return { key: DECKS_KEY, value: JSON.stringify(values) }
}

export const addCardInDeck = (card, deck) => {
  let newDeck = deck
  newDeck.questions.push(card)
  return newDeck
}

export const updateDecks = (newDeck, oldDecks) => {
  const path = [newDeck.title]
  const updatedDecks = updateObjectProperty(oldDecks, path, newDeck)
  return updatedDecks
}

export const createNewDeck = (keyNewDeck) => {
  return { [keyNewDeck]: { title: keyNewDeck, questions: [] } }
}
