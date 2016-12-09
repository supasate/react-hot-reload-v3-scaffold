import React from 'react'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'

const App = ({store}) => {
  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}

export default App
