import React from 'react';
import moment from 'moment';
import Foundation from 'react-foundation';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();


export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName :'',
      email: props.user ? props.user.email :'',
      password: props.password ? props.user.password :'',
      createdAt: props.user ? moment(props.user.createdAt): moment(),
      error: ''

    }
  }

  onlastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({lastName}))
  }
  onfirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({firstName}))
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}))
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}))
  }
  onDateChange = (createdAt) => {
    this.setState(() => ({createdAt}))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.lastName || !this.state.firstName || !this.state.email || !this.state.password) {
      this.setState(() => ({error: 'Please provide First Name, LastName, Email, and Password '}))
      console.log(this.state.error)
    } else {

      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        lastName: this.state.lastName,
        firstName:this.state.firstName,
        email: this.state.email,
        password: this.state.password,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  }


  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}


      <form onSubmit={this.onSubmit}>
        <input
         type="text"
         placeholder="first name"
         autoFocus
         value={this.state.firstName}
         onChange={this.onfirstNameChange}/>
        <input
         type="text"
         placeholder="last name"
         autoFocus
         value={this.state.lastName}
         onChange={this.onlastNameChange}/>
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
