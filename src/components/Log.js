import React from 'react'
import {Redirect} from 'react-router-dom'

class Log extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shouldredirect: false 
    }
  }
  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value
    }
    console.log("Logging Workout...")
    console.log(formData)
}

render() {
  return (this.state.shouldRedirect
    ? <Redirect to='/'/>
    : (
      <div className="LogWorkout">
        <h1>Sets & Reps</h1>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
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
          <button>Select</button>
        </form>
      </div>
    ))
}

}

export default Log
