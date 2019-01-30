//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import moment from 'moment';

const CampaignDetails = (props) => (


        <div className="grid-x grid-padding-x small-up-1 medium-up-3 large-up-3">
          <div className="cell">
          <div className="campaign-title">
          <h3> {props.title} </h3>
          </div>
          <Link to={`/campaign/${props.id}`}>
            <h3 className="learn-more-button">learn more</h3>
          </Link>
          <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
          <p>{props.description}</p>
          <p> Members: {props.members.length}/{props.triggerNumber}</p>
          <p> {props.members.length < props.triggerNumber ? ` ${props.triggerNumber - props.members.length} more members until engine launched` : 'Engine Launched!'} </p>
          <img src={props.imageURL} height="300" width="400" />
          </div>
        </div>

    )





export default CampaignDetails;
