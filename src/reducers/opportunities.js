import {
  FETCH_OPPORTUNITIES_RESOLVED,
  FETCH_OPPORTUNITIES_REJECTED,
  FETCH_OPPORTUNITIES_PENDING,
} from '../actionNames/opportunities'

import StatusReducerCreator from './common/status'
import { combineReducers } from 'redux'

const status = StatusReducerCreator(
  FETCH_OPPORTUNITIES_PENDING,
  FETCH_OPPORTUNITIES_RESOLVED,
  FETCH_OPPORTUNITIES_REJECTED,
)

const initialState = []

function OpportunitiesReducer(state = initialState, action){
  switch(action.type){
    case FETCH_OPPORTUNITIES_RESOLVED: {
      return [...action.opportunities]
    }
    case FETCH_OPPORTUNITIES_PENDING:
    default: return [...state]
  }
}

export default combineReducers({list: OpportunitiesReducer, status})
