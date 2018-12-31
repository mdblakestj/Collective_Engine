//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDetails = ({id, title, triggerNumber, description, createdAt}) => (


        <div>
          <Link to={`/campaign/${id}`}>

            <h3> {title}</h3>
          </Link>
          <p>{description}</p>
          <p> TriggerNumber: {triggerNumber}</p>
          <p>Created At: {createdAt}</p>
        </div>

    )





export default ExpenseDetails;
