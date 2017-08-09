import React from 'react'
import auth from '../auth'
import ReactDOM from 'react-dom'
import CreateWorkout from './CreateWorkout'
import { Button } from 'react-bootstrap'

class Profile extends React.Component {
  state = { exercises:[] }
componentDidMount() {
  // this is where an API call for protected content would be made.
  auth.getExercises().then(exercises => {
    this.setState({exercises: exercises})
  })

}

deleteExercise(id) {
  this.setState ({
    exercise: this.state.exercises.filter((exercise) => {
      return exercise.id !== id
    })
  })
  }


render() {
  var today = new Date()
  return (
    <div>
      <h1>Profile</h1>
      <h2>Exercise for today {today.toString()}</h2>
      <ol>
        {this.state.exercises.map(exercise => (
          <li key={exercise._id}>
            {JSON.stringify(exercise)}
            <Button>Edit</Button><Button>Delete</Button>
          </li>
        ))}
      </ol>
    </div>

  )
}
}
export default Profile
