import React from 'react';
import {startLogin} from '../actions/auth'
import {connect} from 'react-redux'
import LoginForm from './Signinform'
import {NavLink} from 'react-router-dom';

const LogIn = (props) => (
  <div>
      <h1>Sign-in Using</h1>
      <LoginForm />
      <h2>Or</h2>
      <button onClick={props.startLogin}>Google</button>
      <p>New to Collective Engine?</p>
      <NavLink to="/NewUser" activeClassName="is-active">Sign Up!</NavLink>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogIn);
