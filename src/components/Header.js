import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth';

const Header = (props) => (
  <header>
      <h1>Collective Engine</h1>
      <div class="home-link">
      <NavLink to="/home" activeClassName="is-active" exact={true}>Home  </NavLink>
      <NavLink to="/NewCampaign" activeClassName="is-active">New Campaign  </NavLink>
      <NavLink to="/NewUser" activeClassName="is-active">Sign In</NavLink>
      <button onClick={props.startLogout}>Log Out</button>
      </div>

  </header>
)
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
