import React from 'react';
import UserForm from './UserForm'
import {addUser} from '../actions/users'
import {connect} from 'react-redux'

const NewUser = (props) => (
  <div>
      <h1>New User</h1>
      <UserForm
        onSubmit={(user) => {
          props.dispatch(addUser(user))
          props.history.push('/')
        }} />

  </div>
)






export default connect()(NewUser);
