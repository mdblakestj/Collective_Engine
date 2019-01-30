import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import moment from 'moment'
const Campaign = (props) => {

  return (


        <div>

            <h3> {props.campaign.title}</h3>
            <h3> {props.campaign.description}</h3>
            <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
            <p> Members: {props.campaign.members.length}/{props.campaign.triggerNumber}</p>
            <p> {props.campaign.members.length < props.campaign.triggerNumber ? ` ${props.campaign.triggerNumber - props.campaign.members.length} more members until engine launched` : 'Engine Launched!'} </p>

            <img src={props.campaign.imageURL} height="300" width="400" />
            {props.auth.uid && <button onClick={() => {props.history.push(`/JoinEngine/${props.campaign.id}`)}}>Join Engine!</button>}




        </div>

    )

}





// export default Campaign;
const mapStateToProps = (state, props) => {
  return {
    campaign: state.campaigns.find((campaign) => campaign.id === props.match.params.id),
    auth: state.auth
  }
}



const ConnectedCampaign = connect(mapStateToProps
)(Campaign)


export default ConnectedCampaign;
