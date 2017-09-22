import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Welcome extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Button primary as="a" href="http://localhost:3000/api/v1/login">Log In</Button>
      </div>
    )
  }
}



export default Welcome
