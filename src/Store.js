import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import reducers from './reducers'

import thunk from 'redux-thunk'

const initialState = {}

const enhancers = []
const middlewares = [ thunk ]

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const Store = createStore(
  combineReducers(reducers),
  initialState,
  composedEnhancers
)

export default Store
