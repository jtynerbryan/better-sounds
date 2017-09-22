import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../actions/auth'
import { bindActionCreators } from 'redux'
import 'semantic-ui-css/semantic.min.css';

class UserHome extends React.Component {

  componentDidMount() {
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code)
  }

  render() {
    console.log(this.props)
    console.log(localStorage)
    return (
      <div className="App">
        <h1>Fetching your Spotify data...</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authorize}, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
