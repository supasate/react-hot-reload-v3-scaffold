import { AppContainer } from 'react-hot-loader'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/root'
import routes from './routes'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const renderWithHotReload = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainComponent store={store}/>
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
