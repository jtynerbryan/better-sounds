import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import UserHome from './components/UserHome'
import Welcome from './components/Welcome'
// import { Header } from 'semantic-ui-react'

// const failureMessage = () => { return <Header as="h1">Something went wrong logging into Spotify...</Header> }

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/success' component={UserHome}/>
      </div>
    );
  }
}

export default App;
