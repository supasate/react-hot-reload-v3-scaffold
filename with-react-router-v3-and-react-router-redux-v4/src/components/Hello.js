import React from 'react'
import { connect } from 'react-redux'
import HelloChild from './HelloChild'

const Hello = ({ path }) => (
  <div>
    <div>Hello</div>
    <HelloChild path={path} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.location.pathname,
})

export default connect(mapStateToProps)(Hello)
