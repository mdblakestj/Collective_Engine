import React from 'react';
import ReactDOM from 'react-dom';
//import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter, {history} from './routers/AppRouter'
import { Provider } from 'react-redux';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import {startSetCampaigns} from './actions/campaigns';
// import {setTextFilter} from './actions/filters';
// import getVisibleExpenses from './selectors/expenses'
import {firebase} from './firebase/firebase'

const store = configureStore();


// store.dispatch(addCampaign({title: 'Boycott Starbucks', description: 'This is a campaign to Boycott starbucks', triggerNumber: 1000, createdAt: -3000}))
// store.dispatch(addExpense({description: 'Gas Bill', amount: 50, createdAt: 300}))
// store.dispatch(addExpense({description: 'Rent', amount: 50, createdAt: 1000}))



const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

// store.dispatch(startSetCampaigns()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'))
// })

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetCampaigns()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/home')
      }
    });

  } else {
    renderApp();
    history.push('/');
  }
})
