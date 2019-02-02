import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import moment from 'moment';


const CampaignDetails = (props) => (





          <div className="campaign-title">
          <img className="img-campaign" src={props.imageURL} height="300" width="400" />
          <h3>
          <NavLink to={`/campaign/${props.id}`} activeClassName="is-active">{props.title}</NavLink>
          </h3>

          <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
          <p>{props.description}</p>
          <p> Members: {props.members.length}/{props.triggerNumber}</p>
          <progress max="100" value={(props.members.length/props.triggerNumber)*100}></progress>
          <p> {props.members.length < props.triggerNumber ? ` ${props.triggerNumber - props.members.length} more members until engine launched` : 'Engine Launched!'} </p>
          
          </div>


    )





export default CampaignDetails;
