import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";
import LoginForm from "./Signinform";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LogIn = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      backgroundColor: "#F0F0F0"
    }}
  >
    <br />
    <Card className="text-center" style={{ width: "25rem" }}>
      <br />
      <h1>Log in</h1>
      <Card.Body>
        <LoginForm />
        <div style={{}}>
          <hr className="hr-text" dataContent="OR" />
          <button
            className="btn btn-outline-info"
            id="google-button"
            onClick={props.startLogin}
          >
            Google
          </button>
        </div>
        <hr data-content="OR" />
        <h5>New to Collective engine?</h5>
        <NavLink to="/NewUser" activeClassName="is-active">
          {" "}
          <h6>Sign Up!</h6>
        </NavLink>
      </Card.Body>
    </Card>
  </div>
);
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LogIn);
