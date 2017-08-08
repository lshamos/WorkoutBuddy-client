import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import auth from './auth'

// import { Button } from 'react-bootstrap';

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import CreateWorkout from './components/CreateWorkout'
// import Log from './components/Log'
import Profile from './components/Profile'

class App extends Component {

state = {
    currentUser: auth.getCurrentUser()
  }

  setCurrentUser() {
    this.setState({
      currentUser: auth.getCurrentUser()
    })
  }

  logOut() {
    auth.clearToken()
    this.setState({currentUser: null})
  }

  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>
        <div className="App">
          {currentUser
            ? <p>Current User: {currentUser.name}</p>
            : null
          }
          <NavBar currentUser={this.state.currentUser} />
          <Route exact path='/' component={Home} />

          <Route path='/Profile' render={() => (
            currentUser
            ? <Profile />
            : <Redirect to='/logIn' />
          )} />

          <Route path='/signup' component={SignUp} />
          <Route path='/workouts/new' component={CreateWorkout} />
          <Route path='/logIn' render={() => (
            <LogIn onLogIn={this.setCurrentUser.bind(this)} />
          )} />
          <Route path='/logout' render={() => (
            <LogOut onLogOut={this.logOut.bind(this)} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
