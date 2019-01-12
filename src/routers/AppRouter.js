import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from './../components/Header.js'
import NewCampaign from '../components/NewCampaign.js';
import NewUser from '../components/NewUser.js';
// import SignIn from './components/SignIn.js';
import Home from '../components/Home.js';
import Campaign from '../components/Campaign'
import LogIn from '../components/Login'



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LogIn} exact={true} />
        <Route path="/Home" component={Home}/>
        <Route path="/NewCampaign" component={NewCampaign}/>
        <Route path="/campaign/:id" component={Campaign} />
        <Route path="/NewUser" component={NewUser}/>

      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
