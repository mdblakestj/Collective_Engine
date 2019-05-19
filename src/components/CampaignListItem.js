import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import moment from "moment";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";

const CampaignDetails = props => (
  <div className="campaign-title">
    <hr />
    <Row>
      <Col>
        <img
          className="img-campaign"
          src={props.imageURL}
          style={{ borderBottom: "10px #357462 solid" }}
        />
      </Col>
      <Col>
        <h3 className="campaign-link">
          <NavLink to={`/campaign/${props.id}`}>{props.title}</NavLink>
        </h3>
        <h4>{props.launched && "  Engine Launched!"}</h4>
        <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
        <h2>{props.description}</h2>
        <p>
          {" "}
          Members: {props.members.length}/{props.triggerNumber}
        </p>

        <ProgressBar
          style={{ width: "200px" }}
          now={(props.members.length / props.triggerNumber) * 100}
        />
      </Col>
    </Row>
  </div>
);

export default CampaignDetails;
