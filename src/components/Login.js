import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../actions/auth'
import{ logoutUser } from '../actions/auth'
import { bindActionCreators } from 'redux'


class Login extends React.Component {

  componentDidMount() {
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code)
    this.props.history.push("/fetch-user-data")
  }

  handleClick = () => {
    this.props.logoutUser()
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authorize, logoutUser}, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
