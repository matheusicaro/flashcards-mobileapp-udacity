import { ADD_CARD } from '../../../constants'

const actionCreatNewCard = (newCard) => {
  return {
    type: ADD_CARD.ON_PRESS.ADD_NEW_CARD,
    payload: newCard
  }
}

export {
  actionCreatNewCard
}
