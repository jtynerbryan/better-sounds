import React from 'react'
import { authorize } from '../actions/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends React.Component {

  componentDidMount() {
    console.log('login');
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code)
    this.props.history.push("/loading")
  }

  render() {
    return (
      <div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authorize }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
