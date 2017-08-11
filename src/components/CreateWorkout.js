import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import NumericInput from 'react-numeric-input'
import Log from './Log'
import { FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap'


class CreateWorkout extends React.Component {
  state = {
    shouldredirect: false,
    newWorkoutId: null
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value
    }
    console.log("Creating Workout...")
    console.log(formData)

    // make api request to create workout with formData
    auth.createExercise(formData).then(response => {
      console.log(response)
      this.setState({
        shouldRedirect: true,
        newWorkoutId: response.exercise._id
      })
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to={`/workouts/${this.state.newWorkoutId}/sets/new`}/>
      : (
        <div className="CreateWorkout">
          <Grid>
            <Row>
              <Col md={6} mdOffset={3}>
          <h1>Select Exercise</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <FormGroup>
            <select ref='name'>
              <option value='Deadlift'>Deadlift</option>
              <option value='Squat'>Barbell Squat</option>
              <option value='Shoulder Press'>Shoulder Press</option>
              <option value='Bench Press'>Bench Press</option>
              <option value='Barbell Curl'>Barbell Curl</option>
              <option value='Bent Over Row'>Bent Over Row</option>
              <option value='Front Squat'>Front Squat</option>
              <option value='Romanian Deadlift'>Romanian Deadlift</option>
              <option value='Hex Bar Deadlift'>Hex Bar Deadlift</option>
              <option value='Hip Thrust'>Hip Thrust</option>
              <option value='Upright Row'>Upright Row</option>
              <option value='Good Morning'>Good Morning</option>
              <option value='Power Clean'>Power Clean</option>
              <option value='Clean & Jerk'>Clean & Jerk</option>
              <option value='Snatch'>Snatch</option>
              <option value='Clean'>Clean</option>
              <option value='Push Press'>Push Press</option>
              <option value='Clean & Press'>Clean & Press</option>
              <option value='Dumbell Curl'>Dumbell Curl</option>
              <option value='Dumbell Bench Press'>Dumbell Bench Press</option>
              <option value='Dumbell Shoulder Press'>Dumbell Shoulder Press</option>
              <option value='Dumbell Lateral Raise'>Dumbell Lateral Raise</option>
              <option value='Dumbell Row'>Dumbell Row</option>
              <option value='Dumbell Front Raise'>Dumbell Front Raise</option>
              <option value='Pull Ups'>Pull Ups</option>
              <option value='Push Ups'>Push Ups</option>
              <option value='Dips'>Dips</option>
            </select>
            <button>Select</button>
            </FormGroup>
             
          </form>
        </Col>
      </Row>
    </Grid>
        </div>
      ))
  }
}

export default CreateWorkout
