import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import auth from './auth'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import CreateWorkout from './components/CreateWorkout'
// import Log from './components/Log'
import Profile from './components/Profile'
import NewWorkoutSet from './components/NewWorkoutSet'

class App extends Component {

state = {
    currentUser: auth.getCurrentUser(),
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

          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={Profile} />

            <Route path='/Profile' render={() => (
              currentUser
              ? <Profile />
              : <Redirect to='/logIn' />
            )} />

            <Route path='/signup' component={SignUp} />

            <Route exact path='/workouts/new' component={CreateWorkout} />

            <Route exact path='/workouts/:id' render={() => (
              <h1>Viewing a workout</h1>
            )} />
            <Route path='/workouts/:id/sets/new' component={NewWorkoutSet} />


            <Route path='/logIn' render={() => (
              <LogIn onLogIn={this.setCurrentUser.bind(this)} />
            )} />
            <Route path='/logout' render={() => (
              <LogOut onLogOut={this.logOut.bind(this)} />
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
