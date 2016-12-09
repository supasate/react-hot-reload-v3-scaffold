import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const renderWithHotReload = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      <MainComponent />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderWithHotReload(NextApp)
  })
}
