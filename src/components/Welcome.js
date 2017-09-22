import React from 'react'
import { connect } from 'react-redux'
import * as authReducer from '../reducers/authReducer'
import { bindActionCreators } from 'redux'

class Welcome extends React.Component {

  render() {
    return (
      <div>
      Welcome
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authReducer, dispatch)
}

export default connect(null, mapDispatchToProps)(Welcome)
