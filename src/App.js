import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import UserHome from './components/UserHome'
import Login from './components/Login'
import Welcome from './components/Welcome'
// import { Header } from 'semantic-ui-react'

// const failureMessage = () => { return <Header as="h1">Something went wrong logging into Spotify...</Header> }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h4>Spotify Test</h4>
        <Route path='/' component={Welcome}/>
        <Route path='/login' component={Login}/>
        <Route path='/success' component={UserHome}/>
      </div>
    );
  }
}

export default App;
