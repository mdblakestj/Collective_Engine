import uuid from 'uuid'

//ADD_EXPENSE
export const addCampaign = (
  {title = '',
    description = '',
    triggerNumber = 0,
     createdAt = 0} = {}
   ) => ({
  type: 'ADD_CAMPAIGN',
  campaign: {
    id: uuid(),
    title,
    description,
    triggerNumber,
    createdAt
  }
})
//REMOVE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
})
//EDIT
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
}
)
