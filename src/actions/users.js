import uuid from 'uuid'

//ADD_user
export const addUser = (
  {firstName = '',
    lastName = '',
    email = '',
    password = '',
    createdAt=0
    } = {}
   ) => ({
  type: 'ADD_USER',
  user: {
    id: uuid(),
    firstName,
    lastName,
    password,
    email,
    createdAt
  }
})
//REMOVE
export const removeUser = ({id} = {}) => ({
  type: 'REMOVE_USER',
  id,
})
//EDIT
export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
}
)
