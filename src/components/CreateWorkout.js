import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import Log from './Log'


class CreateWorkout extends React.Component {
  state = {
    shouldredirect: false, showLog: false, showRep: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value
    }
    console.log("Creating Workout...")
    console.log(formData)

    // make api request to create workout with formData
  }

  handleSetSelect() {
    console.log("show lbs and rep")
    this.setState( {showRep: true} )
    //console.log(this.state.showRep)
  }

  handleClickSelect() {
    console.log("Show more options")
    this.setState( {showLog: true} )
  }

renderRep() {
  return (
    <div>
      <form>
        <input ref="lbs" type="text" placeholder="lbs" />
        <input ref="reps" type="text" placeholder="reps" />
        <button>lbs/reps</button>
      </form>
    </div>
  )
}

  renderLog() {
    return (
      <div>
        <select ref='name'>
          <option value='Set'>1</option>
          <option value='Set'>2</option>
          <option value='Set'>3</option>
          <option value='Set'>4</option>
          <option value='Set'>5</option>
          <option value='Set'>6</option>
          <option value='Set'>7</option>
          <option value='Set'>8</option>
          <option value='Set'>9</option>
        </select>

        <button onClick={this.handleSetSelect.bind(this)} >Sets</button>

      </div>
    )
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/'/>
      : (
        <div className="CreateWorkout">
          <h1>Select Exercise</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <select ref='name'>
              <option value='Deadlift'>Deadlift</option>
              <option value='Squat'>Squat</option>
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
            <button onClick={this.handleClickSelect.bind(this)}>Select</button>

            {this.state.showLog ? this.renderLog() : null }
            {this.state.showRep ? this.renderRep() : null }

          </form>
        </div>
      ))
  }
}

export default CreateWorkout
