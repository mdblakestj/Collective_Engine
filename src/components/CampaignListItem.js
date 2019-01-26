//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const CampaignDetails = (props) => (


        <div className="grid-x grid-padding-x small-up-1 medium-up-3 large-up-3">
          <div className="cell">
          <div className="campaign-title">
          <h3> {props.title} </h3>
          </div>
          <Link to={`/campaign/${props.id}`}>
            <h3 className="learn-more-button">learn more</h3>
          </Link>
          <p>{props.description}</p>
          <p> TriggerNumber: {props.triggerNumber}</p>
          <p>Created At: {props.createdAt}</p>
          </div>
        </div>

    )





export default CampaignDetails;
