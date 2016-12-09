import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import counterReducer from './counter'

const rootReducer = combineReducers({
  count: counterReducer,
  router: routerStateReducer,
})

export default rootReducer
