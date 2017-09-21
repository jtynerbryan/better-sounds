import React from 'react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class UserHome extends React.Component {
  state = {
    user: '',
    tracks: []
  }

  handleClick = () => {
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
    return (
      <div>
        <h1>Successfull Login through Spotify</h1>
        <button onClick={this.handleClick}>get user</button>
      </div>

    )
  }
}

export default UserHome
