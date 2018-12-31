import React from 'react'
import {connect} from 'react-redux'
import ExpenseDetails from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (

  <div>
    <h1> Campaign List </h1>
    {props.campaigns.map((campaign) => {
      return (

        <ExpenseDetails key={campaign.id} {...campaign} />

      )
    })}
  </div>
)


const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns

  }
}


const ConnectedExpenseList = connect(mapStateToProps
)(ExpenseList)

export default ConnectedExpenseList;
