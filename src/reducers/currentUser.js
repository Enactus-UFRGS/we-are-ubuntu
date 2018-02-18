import {
  FETCH_CURRENT_USER_RESOLVED,
  FETCH_CURRENT_USER_REJECTED,
  FETCH_CURRENT_USER_PENDING,
} from '../actionNames/currentUser'

import StatusReducerCreator from './common/status'
import { combineReducers } from 'redux'

const status = StatusReducerCreator(
  FETCH_CURRENT_USER_RESOLVED,
  FETCH_CURRENT_USER_REJECTED,
  FETCH_CURRENT_USER_PENDING,
)

const initialState = {}

function CurrentUserReducer(state = initialState, action){
  switch(action.type){
    case FETCH_CURRENT_USER_RESOLVED: {
      return normalize(action.user)
    }
    case FETCH_CURRENT_USER_PENDING:
    case FETCH_CURRENT_USER_REJECTED: {
      return {...initialState}
    }
    default: return {...state}
  }
}

function normalize(user){
  return {
    name: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    id: user.uid,
  }
}

export default combineReducers({data: CurrentUserReducer, status})
