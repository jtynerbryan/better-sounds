import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Login extends React.Component {

  render() {
    return (
      <Button primary as="a" href="http://localhost:3000/api/v1/login">Log In</Button>
    )
  }
}

export default Login
