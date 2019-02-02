import React from 'react'
import {connect} from 'react-redux'
import CampaignDetails from './CampaignListItem'
import getVisibleExpenses from '../selectors/expenses'
const CampaignList = (props) => (

  <div className="campaign-list">
    <h1> Engines </h1>
    <div className="grid-container">
    {props.campaigns.map((campaign) => {
      return (
        
          <div className="grid-item">
            <CampaignDetails key={campaign.id} {...campaign} />
          </div>



      )
    })}
    </div>
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
