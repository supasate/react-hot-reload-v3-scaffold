import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import Layout from '../components/Layout'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="hello" component={Hello} />
    <Route path="counter" component={Counter} />
    <Route path="*" component={NoMatch} />
  </Route>
)

export default routes
