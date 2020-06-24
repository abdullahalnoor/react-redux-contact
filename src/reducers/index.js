import  { combineReducers } from 'redux'

import contactReducer from './contactReducer'


const initialState = {}

export default combineReducers({ 
    contact:contactReducer
})