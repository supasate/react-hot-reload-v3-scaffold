import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Home from './components/Home'
import Hello from './components/Hello'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="hello" component={Hello} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
)

export default App
