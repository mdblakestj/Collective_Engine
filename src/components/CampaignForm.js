import React from 'react';
import moment from 'moment';
import {firebase} from '../firebase/firebase'



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
        members: this.state.members,
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
