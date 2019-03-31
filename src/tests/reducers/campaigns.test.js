import campaignReducer from '../../reducers/campaigns'

test('Should return correct array for add capaign action', () => {
  const state = []
  const action = {type: 'ADD_CAMPAIGN', campaign: 'hats', id: 'abc', updates: {createdAt: 0}}
  const result = campaignReducer([], action )
  expect(result).toEqual([...state, 'hats'])
})

test('Should return correct state for remove capaign action', () => {
  const state = []
  const action = {type: 'REMOVE_CAMPAIGN', campaign: 'hats', id: 'abc', updates: {createdAt: 0}}
  const result = campaignReducer([], action )
  expect(result).toEqual([...state, 'hats'])
})








// const campaignReducerDefaultState = [];
// const campaignReducer = (state = campaignReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_CAMPAIGN':
//       return [...state, action.campaign];
//     case 'REMOVE_CAMPAIGN':
//       return state.filter(({id}) => {return id != action.id})
//     case 'EDIT_CAMPAIGN':
//       return state.map((campaign) => {
//         if (campaign.id === action.id) {
//           return {
//             ...campaign,
//             ...action.updates
//           }
//         } else {
//           return campaign
//         }
//       })
//     case 'SET_CAMPAIGNS':
//       return action.campaign
//
//
//     default:
//       return state;
//
//   }
// }
