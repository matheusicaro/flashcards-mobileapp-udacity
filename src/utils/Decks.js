export const DECKS_KEY = 'decks'

export const createNewDeck = (values) => {
  return { key: DECKS_KEY, value: JSON.stringify(values) }
}
