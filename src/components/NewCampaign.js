import React from 'react';
import CampaignForm from './CampaignForm'
import {startAddCampaign} from '../actions/campaigns'
import {connect} from 'react-redux'

const NewCampaign = (props) => (
  <div>
      <h1>New Campaign</h1>
      <CampaignForm
        onSubmit={(campaign) => {
          props.dispatch(startAddCampaign(campaign))
          props.history.push('/')
        }} />

  </div>
)






export default connect()(NewCampaign);
