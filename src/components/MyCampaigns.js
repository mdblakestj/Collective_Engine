import React from 'react'
import {connect} from 'react-redux'
import CampaignDetails from './CampaignListItem'
import getVisibleExpenses from '../selectors/expenses'
import {firebase} from '../firebase/firebase'

const CampaignList = (props) => (

  <div className="campaign-list">
    <h1> Campaigns </h1>
    {props.campaigns.map((campaign) => {
      var user = firebase.auth().currentUser;
      if (campaign.createdBy === user.uid) {
      return (

        <CampaignDetails key={campaign.id} {...campaign} />

      )}
    })}
  </div>
)


const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns

  }
}


const MyCampaigns = connect(mapStateToProps
)(CampaignList)


export default MyCampaigns;
