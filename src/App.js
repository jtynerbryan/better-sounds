import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import UserHome from "./components/UserHome"

const button = () => { return <Button primary as="a" href="http://localhost:3000/api/v1/login">Log In</Button>}

const successMessage = () => { return <UserHome />}
const failureMessage = () => { return <Header as="h1">Something went wrong logging into Spotify...</Header> }

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

        <Route exact path='/login' component={button}/>
        <Route exact path='/success' component={successMessage}/>
        <Route exact path='/failure' component={failureMessage}/>

      </div>
    );
  }
}

export default App;
