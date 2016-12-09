import { AppContainer } from 'react-hot-loader'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/root'
import routes from './routes'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxReactRouter({
      routes,
      createHistory,
    }),
  ),
)

const renderWithHotReload = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainComponent />
      </Provider>
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
