import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Campaign = (props) => {

  return (


        <div>

            <h3> {props.campaign.description}</h3>
            <p> Trigger: {props.campaign.triggerNumber}</p>
            <p> Created At: {props.campaign.createdAt}</p>


        </div>

    )

}





// export default Campaign;
const mapStateToProps = (state, props) => {
  return {
    campaign: state.campaigns.find((campaign) => campaign.id === props.match.params.id)
  }
}



const ConnectedCampaign = connect(mapStateToProps
)(Campaign)


export default ConnectedCampaign;
