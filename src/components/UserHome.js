import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../actions/auth'
import{ logoutUser } from '../actions/auth'
import { bindActionCreators } from 'redux'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class UserHome extends React.Component {

  componentDidMount() {
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code)
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
        <div className="App">
          <h1>Welcome {this.props.user.username}</h1>
          <Button primary onClick={this.handleClick}>Log Out</Button>
        </div>
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
