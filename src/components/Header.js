import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
  <header>
      <h1>Collective Engine</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home  </NavLink>
      <NavLink to="/NewCampaign" activeClassName="is-active">New Campaign  </NavLink>
      <NavLink to="/NewUser" activeClassName="is-active">Sign In</NavLink>
  </header>
)

export default Header;
