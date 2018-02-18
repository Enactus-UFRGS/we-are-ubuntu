import firebase from 'firebase'
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
import {
  FETCH_CURRENT_USER_RESOLVED,
  FETCH_CURRENT_USER_REJECTED,
  FETCH_CURRENT_USER_PENDING,
} from '../actionNames/currentUser'

export function login(email, password){
  return dispatch => {
    dispatch({ type: LOGOUT_PENDING })
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => dispatch({ type: FETCH_CURRENT_USER_RESOLVED, user }))
      .then(() => dispatch({ type: LOGIN_RESOLVED }))
      .catch(error => dispatch({ type:LOGIN_REJECTED, error }))
  }
}

export function logout(){
  return dispatch => {
    dispatch({ type: LOGOUT_PENDING })
    return firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: LOGOUT_RESOLVED}))
      .catch(() => dispatch({ type: LOGOUT_REJECTED }))

  }
}

export function signup(email, password){
  return dispatch => {
    dispatch({type: SIGNUP_PENDING})
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({ type: FETCH_CURRENT_USER_RESOLVED, user }))
      .then(() => dispatch({ type: SIGNUP_RESOLVED }))
      .catch(error => dispatch({ type:SIGNUP_REJECTED, error }))

  }
}
