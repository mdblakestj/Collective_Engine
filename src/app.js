import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
// import IndecisionApp from './components/IndecisionApp.js;
//import 'normalize.css/normalize.css';
import './styles/styles.scss'
import NewCampaign from './components/NewCampaign.js';
import SignIn from './components/SignIn.js';


const Home = () => (
  <div>
      This is from my dashboard component
  </div>
)

const SignUp = () => (
  <div>
      We are at Sign Up Page
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/NewCampaign" component={NewCampaign}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
