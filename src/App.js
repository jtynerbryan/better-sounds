import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Welcome from './components/Welcome'
import FetchUserData from './components/FetchUserData'
import UserResults from './components/UserResults'
import RefreshSpotifyData from './components/RefreshSpotifyData'
import Playlists from './components/Playlists'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/success' component={Login}/>
        <Route exact path='/loading' component={FetchUserData}/>
        <Route exact path='/listening-profile' component={UserResults}/>
        <Route exact path='/playlists' component={Playlists}/>
        <Route exact path='/re-loading' component={RefreshSpotifyData}/>
      </div>
    );
  }
}

export default App;
