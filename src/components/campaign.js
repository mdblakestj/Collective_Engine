import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import moment from "moment";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
const Campaign = props => {
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0"
      }}
    >
      {" "}
      <Container>
        <h1>{props.campaign.title}</h1>

        <Row>
          <Col>
            <img src={props.campaign.imageURL} className="img-campaign" />
          </Col>
          <br />
          <h5> {props.campaign.description}</h5>
          <br />
          <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
          <br />
          <p>
            {" "}
            Members: {props.campaign.members.length}/
            {props.campaign.triggerNumber}
          </p>
          <progress
            max="100"
            value={
              (props.campaign.members.length / props.campaign.triggerNumber) *
              100
            }
          />
          <p>
            {" "}
            {props.campaign.members.length < props.campaign.triggerNumber
              ? ` ${props.campaign.triggerNumber -
                  props.campaign.members
                    .length} more members until engine launched`
              : "Engine Launched!"}{" "}
          </p>
          <br />
          <img src={props.campaign.imageURL} className="img-campaign" />
          <br />
          <br />
          {props.auth.uid && (
            <button
              onClick={() => {
                props.history.push(`/JoinEngine/${props.campaign.id}`);
              }}
            >
              Join Engine!
            </button>
          )}
        </Row>
      </Container>
    </div>
  );
};

// export default Campaign;
const mapStateToProps = (state, props) => {
  return {
    campaign: state.campaigns.find(
      campaign => campaign.id === props.match.params.id
    ),
    auth: state.auth
  };
};

const ConnectedCampaign = connect(mapStateToProps)(Campaign);

export default ConnectedCampaign;
