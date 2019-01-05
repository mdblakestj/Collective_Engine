import uuid from 'uuid'
import database from '../firebase/firebase'

//ADD_campaign
export const addCampaign = (campaign) => ({
  type: 'ADD_CAMPAIGN',
  campaign

});


export const startAddCampaign = (campaignData ={}) => {
  return (dispatch) => {
    const {
      title = '',
      description = '',
      triggerNumber = 0,
       createdAt = 0

    } = campaignData;
    const campaign = { title, description, triggerNumber, createdAt};
    database.ref('campaigns').push(campaign).then((ref) => {
      dispatch(addCampaign({
        id: ref.key,
        ...campaign
      }))
    })


  }
}
//REMOVE
export const removeCampaign = ({id} = {}) => ({
  type: 'REMOVE_campaign',
  id,
})
//EDIT
export const editCampaign = (id, updates) => ({
  type: 'EDIT_campaign',
  id,
  updates
}
)
