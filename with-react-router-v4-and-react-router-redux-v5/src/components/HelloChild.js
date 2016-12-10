import React from 'react'
import { connect } from 'react-redux'

const HelloChild = ({path}) => (
  <div>
    Hello-Child at path {path}
  </div>
)

const mapStateToProps = state => ({
  path: state.router.location.pathname,
})

export default connect(mapStateToProps)(HelloChild)
