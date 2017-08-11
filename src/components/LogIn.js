import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'

class LogIn extends React.Component {
  state = {
    shouldredirect: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("LOGGING IN...")
    console.log(formData)
    auth.logIn(formData).then(user => {
      if (user) {
        //sets current user in parent state
        this.props.onLogIn()
        this.setState({shouldRedirect: true})
      }
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/workouts/new'/>
      : (
        <div className="LogIn">
          <div>
            <h1>I'm your Workout Buddy!</h1>
            <h2>Log in to start your workout!</h2>
          </div>
          <h1>Log In</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="email" type="text" placeholder="Email"/>
            <input ref="password" type="password" placeholder="Password"/>
            <button>Log In</button>
          </form>
        </div>
      ))
  }
}

export default LogIn
