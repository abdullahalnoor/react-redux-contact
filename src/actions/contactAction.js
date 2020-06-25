import { GET_CONTACTS,ADD_CONTACT,DELETE_CONTACT,SET_CONTACT,UPDATE_CONTACT,GET_CONTACT } from './types'
import axios from 'axios'

export const getContacts = () => async dispatch =>   {
    
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    dispatch({
        type:GET_CONTACTS,
        payload:res.data
    }) 
   
}

export const  addContact = contact => async dispatch => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users/",contact)
    dispatch ({
        type:ADD_CONTACT,
        payload:res.data
    })
} 



// export const deleteContact = id => async dispatch => {
//     try{
//         const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//         dispatch( {
//             type:DELETE_CONTACT,
//             payload:id
//         })
//     }catch(err){
//         dispatch( {
//             type:DELETE_CONTACT,
//             payload:id
//         })
//     }
   
// }





export const singleAction = action => async dispatch => {

switch (action.type) {
    // setContact
    case "setContact":
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${action.id}`)
        dispatch({
            type:SET_CONTACT,
            payload:res.data
        })
      break;
    case "deleteContact":
        try{
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${action.id}`)
            dispatch( {
                type:DELETE_CONTACT,
                payload:action.id
            })
        }catch(err){
            dispatch( {
                type:DELETE_CONTACT,
                payload:action.id
            })
        }
      break;

}

    

   
   
}