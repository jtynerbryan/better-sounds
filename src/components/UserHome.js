import React from 'react'
import { connect } from 'react-redux'
import * as authReducer from '../reducers/authReducer'
import { bindActionCreators } from 'redux'
import 'semantic-ui-css/semantic.min.css';

class UserHome extends React.Component {

  componentDidMount() {
    const code = this.props.location.search.split("=")[1]
    const body = {
      method: "POST"
    }
    console.log(code)
    fetch(`http://localhost:3000/api/v1/users/create?code=${code}`, body)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Fetching your Spotify data...</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authReducer, dispatch)
}

function mapStateToProps(state) {
  console.log("Checking state", state)
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
