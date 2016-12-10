import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import routes from './routes'

const App = () => {
  return (
    <ConnectedRouter>
      { routes }
    </ConnectedRouter>
  )
}

export default App
