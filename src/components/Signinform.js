import React from 'react';
// import Foundation from 'react-foundation';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';




export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      email: props.user ? props.user.email :'',
      password: props.user ? props.user.password :'',


      error: ''

    }
  }


  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}))
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}))
  }


  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.email || !this.state.password) {
      this.setState(() => ({error: 'Please provide Email, and Password '}))
      console.log(this.state.error)
    } else {

      this.setState(() => ({error: ''}))
      this.props.onSubmit({

        email: this.state.email,
        password: this.state.password,


      })
    }
  }


  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}

    <form>
        <input
          type="text"
          placeholder="email"
          autoFocus
          value={this.state.email}
          onChange={this.onEmailChange}/>
        <input
            type="text"
            placeholder="password"
            autoFocus
            value={this.state.password}
            onChange={this.onPasswordChange}/>



        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
