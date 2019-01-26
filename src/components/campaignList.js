import React from 'react'
import {connect} from 'react-redux'
import CampaignDetails from './CampaignListItem'
import getVisibleExpenses from '../selectors/expenses'
const CampaignList = (props) => (

  <div className="campaign-list">
    <h1> Engines </h1>
    {props.campaigns.map((campaign) => {
      return (

        <CampaignDetails key={campaign.id} {...campaign} />

      )
    })}
  </div>
)


const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns

  }
}


const ConnectedCampaignList = connect(mapStateToProps
)(CampaignList)

export default ConnectedCampaignList;
