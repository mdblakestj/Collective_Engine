import React from 'react';
import CampaignForm from './CampaignForm'
import {startAddCampaign} from '../actions/campaigns'
import {connect} from 'react-redux'
import {Container,Row, Col} from 'react-bootstrap'

const NewCampaign = (props) => (
  <div>
    <Container>
      <Row>
        <h1 className="new-engine">New Engine</h1>
      </Row>
    </Container>
      <CampaignForm
        onSubmit={(campaign) => {
          props.dispatch(startAddCampaign(campaign))
          props.history.push(`/home`)

        }} />

  </div>
)






export default connect()(NewCampaign);
