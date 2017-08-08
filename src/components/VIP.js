import React from 'react'
import auth from '../auth'


class VIP extends React.Component {
  state= {exercises:[]}
  componentDidMount() {
    // this is where an API call for protected content would be made.
    auth.getExercises().then(exercises => {
      this.setState({exercises: exercises})
    })
  }

  render() {
    return (
      <div>
        <h1>THE VIP</h1>
        <ul>
          {this.state.exercises.map(exercise => (
            <li key={exercise._id}>{exercise.name}</li>
          ))}
        </ul>
      </div>

    )
  }
}

export default VIP
