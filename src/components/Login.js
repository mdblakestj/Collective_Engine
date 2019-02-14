import React from 'react';
import {startLogin} from '../actions/auth'
import {connect} from 'react-redux'
import LoginForm from './Signinform'
import {NavLink} from 'react-router-dom';
import {Container,Row, Col} from 'react-bootstrap'

const LogIn = (props) => (
  <div>
  <Container>
    <h1 className="sign-in">Sign-in Using</h1>
      <Row className="login-form">
        <Col>
          <LoginForm/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Or</h2>
          <p></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="btn btn-outline-info" id="google-button" onClick={props.startLogin}>Google</button>
        </Col>
      </Row>
      <div className="sign-up">
      <Row>
        <Col>
          <p>New to Collective Engine?</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <NavLink to="/NewUser" activeClassName="is-active"> <h1>Sign Up!</h1></NavLink>
        </Col>
      </Row>
      </div>
    </Container>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogIn);
