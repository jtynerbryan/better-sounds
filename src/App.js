import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Welcome from './components/Welcome'
import About from './components/About'
import FetchUserData from './components/FetchUserData'
import UserResults from './components/UserResults'
import RefreshSpotifyData from './components/RefreshSpotifyData'
import Playlists from './components/Playlists'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/success' component={Login}/>
          <Route exact path='/fetch-user-data' component={FetchUserData}/>
          <Route exact path='/user-results' component={UserResults}/>
          <Route exact path='/playlists' component={Playlists}/>
          <Route exact path='/refresh-spotify-data' component={RefreshSpotifyData}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
