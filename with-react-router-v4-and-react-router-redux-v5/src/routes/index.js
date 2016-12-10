import React from 'react'
import { Match, Miss } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import Layout from '../components/Layout'

const routes = (
  <div>
    <Layout />
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/hello" component={Hello} />
    <Match pattern="/counter" component={Counter} />
    <Miss component={NoMatch} />
  </div>
)

export default routes
