import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth';

const Header = (props) => (
  <header>
      <h1>Collective Engine</h1>
      <div className="home-link">
      <NavLink to="/home" activeClassName="is-active" exact={true}>Home  </NavLink>
      <NavLink to="/NewCampaign" activeClassName="is-active">New Campaign  </NavLink>
      {!props.auth && <NavLink to="/" activeClassName="is-active">Sign In</NavLink>}
      {props.auth && <button onClick={props.startLogout}>Log Out</button>}


      </div>

  </header>
)
const mapDispatchToProps = (dispatch) => ({


  startLogout:() => dispatch(startLogout())



});
//
// export default connect(undefined, mapDispatchToProps)(Header);

const mapStateToProps = (state, props, dispatch) => {
  return {
    auth: state.auth.uid,
    startLogin: () => dispatch(startLogout())
  }
}



const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps
)(Header)


export default ConnectedHeader;
