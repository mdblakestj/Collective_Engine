import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import moment from 'moment';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Container,Row, Col} from 'react-bootstrap'


const CampaignDetails = (props) => (



        <div className="campaign-title">
          <Container>
             <Row>
               <h3>
              <NavLink to={`/campaign/${props.id}`} activeClassName="is-active">{props.title}</NavLink>
              </h3>
             </Row>
             <Row>
             <Col>
                 <img className="img-campaign" src={props.imageURL} height="300" width="400" />
             </Col>
             <Col>
               <p>Created: {moment(props.createdAt).format("dddd, MMMM Do YYYY")}</p>
               <p>{props.description}</p>
               <p> Members: {props.members.length}/{props.triggerNumber}</p>

               <ProgressBar style={{width: '200px'}} now={(props.members.length/props.triggerNumber)*100} />

             </Col>
            </Row>


          </Container>
          
          </div>


    )





export default CampaignDetails;
