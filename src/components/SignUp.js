import React from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'
import { FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

class SignUp extends React.Component {
  state = {
    shouldRedirect: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("CREATING ACCOUNT...")
    console.log(formData)
    auth.signUp(formData).then(success => {
      if(success) this.setState({shouldRedirect: true})
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/login' />
      : (
        <div className="SignUp">
          <Grid>
            <Row>
              <Col md={6} mdOffset={3}>
                <h1>Create An Account</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
          <FormGroup>
              <input ref="name" type="text" placeholder="Name"/>
              <input ref="email" type="text" placeholder="Email"/>
              <input ref="password" type="password" placeholder="Password"/>
          </FormGroup>
        <button>Create Account</button>
          </form>
        </Col>
      </Row>
    </Grid>
        </div>
      )
    )
  }
}

export default SignUp
