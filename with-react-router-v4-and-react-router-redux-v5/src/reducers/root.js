import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer from './counter'

const rootReducer = combineReducers({
  count: counterReducer,
  router: routerReducer,
})

export default rootReducer
