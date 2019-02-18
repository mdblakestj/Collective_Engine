import React from 'react'
import {connect} from 'react-redux'
import CampaignDetails from './CampaignListItem'
import getVisibleExpenses from '../selectors/expenses'
import {Container,Row, Col} from 'react-bootstrap'
const CampaignList = (props) => (

  <div className="campaign-list">
    <Container>
      <Row>
        <h4>Featured Engines </h4>
      </Row>
    {props.campaigns.map((campaign) => {
      return (

          <Row>
            <CampaignDetails key={campaign.id} {...campaign} />

          </Row>


      )
    })}
    </Container>
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
