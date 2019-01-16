import React from 'react';
import {startLogin} from '../actions/auth'
import {connect} from 'react-redux'

const LogIn = ({startLogin}) => (
  <div>
      This is the Login Page
      <button onClick={startLogin}>Login</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogIn);
