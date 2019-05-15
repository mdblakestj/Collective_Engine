import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {startEditCampaign} from '../actions/campaigns'
import {startAddCampaign} from '../actions/campaigns'

const JoinEngine = (props) => (


        <div className="grid-x grid-padding-x small-up-1 medium-up-3 large-up-3">
          <div className="cell">
          <div className="campaign-title">
          <h3> Are you sure you want to join? </h3>
          <p>This is for REAL REAL </p>
          <button onClick={() => {
              var newMembers = props.campaign.members
              var launched = props.campaign.launched
              newMembers.push(props.auth.uid)
              if(newMembers === props.campaign.triggerNumber) {
                launched = true;
              }
              props.dispatch(startEditCampaign(props.campaign.id, {members: newMembers, launched: launched }))
              props.history.push(`/campaign/${props.campaign.id}`)
              }



          }>Yes</button>
          </div>
          </div>
        </div>

    )



const mapStateToProps = (state, props) => {
  return {
    campaign: state.campaigns.find((campaign) => campaign.id === props.match.params.id),
    auth: state.auth

  }
}


const connectedJoinEngine = connect(mapStateToProps
)(JoinEngine)


export default connectedJoinEngine;


// props.dispatch(editCampaign(props.campaigns.id, props.auth.uid))
