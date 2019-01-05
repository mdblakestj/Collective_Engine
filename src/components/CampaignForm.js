import React from 'react';
import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();


export default class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.campaign ? props.campaign.title : '',
      description: props.campaign ? props.campaign.description :'',
      triggerNumber: props.campaign ? props.campaign.triggerNumber : '',
      createdAt: props.campaign ? moment(props.campaign.createdAt): moment(),
      error: ''

    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}))
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({title}))
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}))
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
    if (!this.state.description) {
      this.setState(() => ({error: 'Please provide description and amount'}))
      console.log(this.state.error)
    } else {

      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        triggerNumber: this.state.triggerNumber,
        note: this.state.note
      })
    }
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
      </div>
    )
  }
}
