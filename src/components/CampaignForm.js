import React from 'react';
import moment from 'moment';
import {firebase} from '../firebase/firebase'
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'


const now = moment();


export default class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.campaign ? props.campaign.title : '',
      description: props.campaign ? props.campaign.description :'',
      triggerNumber: props.campaign ? props.campaign.triggerNumber : '',
      createdAt: props.campaign ? moment(props.campaign.createdAt): moment(),
      createdBy: props.campaign ? props.campaign.createdBy : '',
      members: [],
      error: '',
      imageURL: '',
      image: null,
      url: ''
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}))
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({title}))
  }
  onTriggerNumberChange = (e) => {
    const triggerNumber = e.target.value;
    this.setState(() => ({triggerNumber}))
  }
  onDateChange = (createdAt) => {
    this.setState(() => ({createdAt}))
  }


  onSubmit = (e) => {
    e.preventDefault()
    var user = firebase.auth().currentUser;
    if (!this.state.description || !this.state.title || !this.state.triggerNumber) {
      this.setState(() => ({error: 'Please provide title, description and trigger number'}))

    } else {

      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        triggerNumber: this.state.triggerNumber,
        createdBy: user.uid,
        members: [user.uid],
        imageURL: this.state.url
      })
    }
  }
  fileSelectedHandler = (e) => {
    const image = e.target.files[0];
    this.setState(() => ({image}));

  }
  fileUploadHandler = () => {
    const {image} = this.state
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image)
    // const url = `gs://collective-engine.appspot.com/images/${image.name}`
    firebase.storage().ref('images').child(image.name).getDownloadURL().then(url =>{
      console.log(url);
      this.setState(() => ({url}))

    })

    uploadTask.on('state_changed',
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransfered/snapshot.totalBytes) * 100;
        console.log(percentage);
      }, function error(err) {
        console.log(err)
      }, function complete() {

        }
      )
   }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;








      <form onSubmit={this.onSubmit}>
        <input
         type="text"
         placeholder="Title"
         autoFocus
         value={this.state.title}
         onChange={this.onTitleChange}/>
        <input
         type="text"
         placeholder="Description"
         autoFocus
         value={this.state.description}
         onChange={this.onDescriptionChange}/>
         <input
          type="number"
          placeholder="Trigger Number"
          autoFocus
          value={this.state.triggerNumber}
          onChange={this.onTriggerNumberChange}/>

        <button>Form Submit</button>

      </form>
      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
      <br/>

      <img src={this.state.url || 'http://via.placeholder.com/350x150'} alt="uploaded images" height="300" width="400" />
      </div>
    )
  }
}
