import React from 'react'
import { ReduxRouter } from 'redux-router'
import routes from './routes'

const App = () => (
  <ReduxRouter>
    { routes }
  </ReduxRouter>
)

export default App
