import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import moment from "moment";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col, Image } from "react-bootstrap";

const CampaignDetails = props => (
  <div className="campaign-title">
    <hr />
    <Row>
      <Col>
        <Image
          src={props.imageURL}
          fluid
          style={{ borderBottom: "10px #357462 solid" }}
        />
      </Col>
      <Col>
        <h3 className="campaign-link">
          <NavLink to={`/campaign/${props.id}`}>{props.title}</NavLink>
        </h3>
        <h4 style={{ color: "red" }}>
          {props.launched && "  Engine Launched!"}
        </h4>
        <h5>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</h5>
        <p>{props.description}</p>
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
