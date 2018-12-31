import {createStore, combineReducers} from 'redux';
import campaignReducer from '../reducers/campaigns'
import filterReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      campaigns: campaignReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}
