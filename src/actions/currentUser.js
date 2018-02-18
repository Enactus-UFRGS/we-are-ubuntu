import firebase from 'firebase'
import {
  LOGIN_RESOLVED,
  LOGOUT_RESOLVED,
} from '../actionNames/auth'
import {
  FETCH_CURRENT_USER_RESOLVED,
  FETCH_CURRENT_USER_REJECTED,
} from '../actionNames/currentUser'

const ACTIVE_LISTENER = { value: false }

export function listenToUserChanges(){
  return dispatch => {
    if(ACTIVE_LISTENER.value){
      return
    }
    ACTIVE_LISTENER.value = true;
    Object.freeze(ACTIVE_LISTENER)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({type: LOGIN_RESOLVED})
        dispatch({type: FETCH_CURRENT_USER_RESOLVED, user})
      } else {
        dispatch({type: LOGOUT_RESOLVED})
        dispatch({ type: FETCH_CURRENT_USER_REJECTED })
      }
    });
  }
}
