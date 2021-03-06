import { GET_CONTACTS, ADD_CONTACT,DELETE_CONTACT,SET_CONTACT } from '../actions/types'


const initialState = {
    contacts: [],
    contact:{}
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts:action.payload
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload,...state.contacts]
            }    
        case DELETE_CONTACT:
          return  {
            ...state,
            contacts: state.contacts.filter(contact => (contact.id !== action.payload))
          }    
        case  SET_CONTACT:
          return {
            ...state,
            contact:action.payload
          }  
        default:
           return state
    }
}