import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class Welcome extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Button primary as="a" href="http://localhost:3000/api/v1/login">Log In</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
}


export default connect(mapStateToProps, null)(Welcome)
