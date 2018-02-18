import {
  LOGIN_RESOLVED,
  LOGIN_REJECTED,
  LOGIN_PENDING,
  SIGNUP_RESOLVED,
  SIGNUP_REJECTED,
  SIGNUP_PENDING,
  LOGOUT_RESOLVED,
  LOGOUT_REJECTED,
  LOGOUT_PENDING,
} from '../actionNames/auth'

const initialState = false

export default function AuthReducer(state = initialState, action){
  switch(action.type){
    case SIGNUP_RESOLVED:
    case LOGIN_RESOLVED: {
      return true
    }

    case LOGOUT_RESOLVED:
    case SIGNUP_REJECTED:
    case LOGIN_REJECTED: {
      return false
    }
    case LOGIN_PENDING:
    case SIGNUP_PENDING:
    case LOGOUT_PENDING:
    case LOGOUT_REJECTED:
    default: return state
  }
}
