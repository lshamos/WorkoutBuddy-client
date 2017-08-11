import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import { FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

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
            <Grid>
              <Row>
                <Col md={8} mdOffset={2}>
            <div>
            <h1>I'm your Workout Buddy!</h1>
            <h2>Log in to start your workout!</h2>
          </div>
        </Col>
      </Row>
    </Grid>
        <Grid>
            <Row>
              <Col md={8} mdOffset={2}>
          <h1>Log In</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <FormGroup>
            <input ref="email" type="text" placeholder="Email"/>
            <input ref="password" type="password" placeholder="Password"/>
            </FormGroup>
            <button>Log In</button>
          </form>
        </Col>
      </Row>
    </Grid>
      </div>

      ))
  }
}

export default LogIn
