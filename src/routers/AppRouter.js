import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
// import AddExpensePage from './../components/AddExpensePage.js'
// import EditExpensePage from './../components/EditExpensePage.js'
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import Header from './../components/Header.js'
// import HelpPage from './../components/HelpPage.js'
// import NotFound from './../components/NotFoundPage.js'
import NewCampaign from '../components/NewCampaign.js';
// import SignIn from './components/SignIn.js';
import Home from '../components/Home.js';
import Campaign from '../components/Campaign'



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/NewCampaign" component={NewCampaign}/>
        <Route path="/campaign/:id" component={Campaign} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
