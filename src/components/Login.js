import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../actions/auth'
import{ logoutUser } from '../actions/auth'
import { bindActionCreators } from 'redux'
// import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Loader from './Loader'

class UserHome extends React.Component {

  componentDidMount() {
    if (this.props.location.search="?error=access_denied") {
      this.props.history.push('/')
    } else {
      const code = this.props.location.search.split("=")[1]
      this.props.authorize(code)
      this.props.history.push("/fetch-user-data")
    }
  }

  handleClick = () => {
    this.props.logoutUser()
    this.props.history.push("/")
  }

  render() {
    console.log(this.props)
    if (!this.props.isLoggedIn) {
      return (
        <div className="App">
        <h1>Fetching your Spotify data...</h1>
        </div>
      )
    } else {
      return (

          <Loader />

      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
