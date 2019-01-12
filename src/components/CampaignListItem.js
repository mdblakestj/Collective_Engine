//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const CampaignDetails = ({id, title, triggerNumber, description, createdAt}) => (


        <div class="grid-x grid-padding-x small-up-1 medium-up-3 large-up-3">
          <div class="cell">
          <div class="campaign-title">
          <h3> {title} </h3>
          </div>
          <Link to={`/campaign/${id}`}>
            <h3 class="learn-more-button">learn more</h3>
          </Link>
          <p>{description}</p>
          <p> TriggerNumber: {triggerNumber}</p>
          <p>Created At: {createdAt}</p>
          </div>
        </div>

    )





export default CampaignDetails;
