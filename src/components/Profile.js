import React from 'react'
import auth from '../auth'
import ReactDOM from 'react-dom'
import CreateWorkout from './CreateWorkout'

class Profile extends React.Component {
  state = { exercises:[] }
componentDidMount() {
  // this is where an API call for protected content would be made.
  auth.getExercises().then(exercises => {
    this.setState({exercises: exercises})
  })
}


render() {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {this.state.exercises.map(exercise => (
          <li key={exercise._id}>{exercise.name}</li>
        ))}
      </ul>
    </div>

  )
}
}
export default Profile
