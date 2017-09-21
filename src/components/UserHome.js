import React from 'react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class UserHome extends React.Component {
  state = {
    user: '',
    tracks: []
  }

  componentDidMount() {
    // fetch('http://localhost:3000/api/v1/user/show')
    // .then(res => res.json()).then(res => this.setState({
    //   user: res.user
    // }))
  }

  handleClick = () => {
    fetch('http://localhost:3000/api/v1/recently_played_tracks')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    console.log(this.props.location.search.split("=")[1])
    return (
      <div>
        <h1>Successfull Login through Spotify</h1>
        <button onClick={this.handleClick}>get tracks</button>
      </div>

    )
  }
}

export default UserHome
