import React from 'react'
import auth from '../auth'
import ReactDOM from 'react-dom'
import CreateWorkout from './CreateWorkout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import moment from 'moment'
import { FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

class Profile extends React.Component {
  state = { exercises:[] }
componentDidMount() {
  // this is where an API call for protected content would be made.
  auth.getExercises().then(exercises => {
    this.setState({exercises: exercises})
    console.log(this.state.exercises);
  })


}

deleteExercise(id) {
  console.log("what is going on!?"),
  this.setState({loading: true})
  auth.deleteExercise(id).then((response) => {
    console.log(response)
    this.setState({
      loading: false,
      exercises: this.state.exercises.filter((exercise) => {
        return exercise._id !== id
      })
    })
  })
}


render() {
  var today = new Date()
  return (
    <div className='Profile'>
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
      <h2>Today's workout {moment(today).format("dddd, MMMM Do YYYY")}</h2>
      <div>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
        <ol>
          {this.state.exercises.map(exercise => (
            <li key={exercise._id}>
              {exercise.name}
              <ol>
                {exercise.sets.map((set, index) => (
                  <li key={index}>lbs: {set.lbs} reps: {set.reps}</li>
                ))}
              </ol>
              <Link className="btn btn-default" to={`/workouts/${exercise._id}/sets/new`}>Add Set</Link>
              <Button onClick= {this.deleteExercise.bind(this, exercise._id)}>Delete</Button>
            </li>
          ))}
        </ol>
      </Col>
    </Row>
  </Grid>
      </div>
    </Col>
  </Row>
</Grid>
    </div>

  )
}
}
export default Profile
