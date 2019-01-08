import uuid from 'uuid'
import database from '../firebase/firebase'

//ADD_User
export const addUser = (user) => ({
  type: 'ADD_USER',
  user

});


export const startAddUser = (userData ={}) => {
  return (dispatch) => {
    const {
      firstName = '',
      lastName = '',
      email = '',
      password = '',
      createdAt=0

    } = userData;
    const user = { firstName, lastName, email, password, createdAt};
    database.ref('users').push(user).then((ref) => {
      dispatch(adduser({
        id: ref.key,
        ...user
      }))
    })


  }
}

// //ADD_user
// export const addUser = (
//   {firstName = '',
//     lastName = '',
//     email = '',
//     password = '',
//     createdAt=0
//     } = {}
//    ) => ({
//   type: 'ADD_USER',
//   user: {
//     id: uuid(),
//     firstName,
//     lastName,
//     password,
//     email,
//     createdAt
//   }
// })
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
