import { combineReducers } from 'react-redux'
import StatusReducerCreator from '/reducers/common/status'
import {
  AUTH_USER_LOGIN_RESOLVED,
  AUTH_USER_LOGIN_REJECTED,
  AUTH_USER_LOGIN_PENDING,
  AUTH_USER_LOGOUT_RESOLVED,
  AUTH_USER_LOGOUT_REJECTED,
  AUTH_USER_LOGOUT_PENDING,
} from '/actionNames/auth'

const initialState = null
const USER_KEYS_MAPPING: = {
  displayName: 'name',
  email: 'email'
}

function AuthUserReducer(state = initialState, action){
  switch action.type {
    case AUTH_USER_LOGIN: {
      return userSerializer(user)
    }
    case AUTH_USER_LOGOUT: {
      return initialState
    }
    default: return state
  }
}


function userSerializer(user){
  const serialized = {}
  for key in user {
    serialized[USER_KEYS_MAPPING[key]] = user[key]
  }

  return {...serialized}
}

export default combineReducers({
  user: AuthUserReducer,
  status: StatusReducerCreator(AUTH_USER_LOGIN_PENDING, AUTH_USER_LOGIN_REJECTED, AUTH_USER_LOGOUT_RESOLVED, AUTH_USER_LOGIN_RESOLVED)
})
