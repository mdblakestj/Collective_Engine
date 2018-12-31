import React from 'react';
import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.campaign ? props.campaign.title : '',
      description: props.campaign ? props.campaign.description :'',
      note: props.campaign ? props.campaign.note : '',
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
  onAmountChange = (e) => {
    const amount = e.target.value;
    if ((!amount) || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
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
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
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

        <textarea
          placeholder="Add a note for your expense"
          value={this.state.note}
          onChange={this.onNoteChange}>

        </textarea>
        <button>Form Submit</button>
      </form>
      </div>
    )
  }
}
