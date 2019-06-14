import React from "react";
import { connect } from "react-redux";
import CampaignDetails from "./CampaignListItem";
import getVisibleExpenses from "../selectors/expenses";
import { firebase } from "../firebase/firebase";
import getUserEngines from "../selectors/userEngines";
import { Container, Row, Col } from "react-bootstrap";

const CampaignList = props => (
  <div className="campaign-list">
    <Container>
      <h3 style={{ padding: "20px 0px 5px" }}>My Engines</h3>

      {getUserEngines(props.campaigns, props.auth).map(campaign => {
        return <CampaignDetails key={campaign.id} {...campaign} />;
      })}
    </Container>
  </div>
);

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns,
    auth: state.auth
  };
};

const MyCampaigns = connect(mapStateToProps)(CampaignList);

export default MyCampaigns;
