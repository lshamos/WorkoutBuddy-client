import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import NumericInput from 'react-numeric-input'
import { FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

class NewWorkoutSet extends React.Component {
  state = {
    shouldredirect: false, showRep: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      lbs: this.refs.lbs.value,
      reps: this.refs.reps.value,
    }

    console.log(formData)

    const workoutId = this.props.match.params.id
    auth.addSet(workoutId, formData)
      .then(response => {
        console.log(response)
        this.setState({shouldRedirect: true})
      })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? (
        <Redirect to='/profile' />
      )
      : (
        <div>
          <Grid>
            <Row>
              <Col md={6} mdOffset={3}>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <FormGroup>
                    <ControlLabel>lbs</ControlLabel>
                    <input type="number" ref='lbs' placeholder="lbs" min={0} step={0.5} precision={2} className="form-control" />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Reps</ControlLabel>
                    <input type="number" ref='reps' placeholder="reps" className="form-control"/>
                  </FormGroup>
                  <button>Add Set</button>
                </form>
              </Col>
            </Row>
          </Grid>
        </div>
      )

    )
  }
}

export default NewWorkoutSet
