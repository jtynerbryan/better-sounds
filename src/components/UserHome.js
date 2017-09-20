import React from 'react'

class UserHome extends React.Component {
  state = {
    user: '',
    tracks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/user/show')
    .then(res => res.json()).then(res => this.setState({
      user: res.user
    }))
  }

  handleClick = () => {
      let header = {
        Authorization: `Bearer ${this.state.user.access_token}`
      }
      console.log(header)

      fetch('https://api.spotify.com/v1/me/top/tracks/', header).then(res => res.json()).then(res => console.log(res))
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <h1>Successfull Login through Spotify</h1>
        <button onClick={this.handleClick}>get tracks</button>
      </div>

    )
  }
}

export default UserHome






//
//   user_response = RestClient.get("https://api.spotify.com/v1/me", header)
//
//   fetch('https://api.spotify.com/v1/me/top/tracks', )
