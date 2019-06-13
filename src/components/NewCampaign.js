import React from "react";
import CampaignForm from "./CampaignForm";
import { startAddCampaign } from "../actions/campaigns";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const NewCampaign = props => (
  <div>
    <Container>
      <h3 className="campaign-title">New Engine</h3>

      <CampaignForm
        onSubmit={campaign => {
          props.dispatch(startAddCampaign(campaign));
          props.history.push(`/home`);
        }}
      />
    </Container>
  </div>
);

export default connect()(NewCampaign);
