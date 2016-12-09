import React from 'react'
import { Link } from 'react-router'

const Layout = (props) => (
  <div>
    <div><Link to="/">Home</Link> <Link to="/hello">Hello</Link> <Link to="/counter">Counter</Link></div>
    { props.children }
  </div>
)

export default Layout
