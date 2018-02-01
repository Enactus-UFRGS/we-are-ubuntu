const initialState = {
  pending: false,
  resolved: false,
  rejected: false,
  errors: null,
}

export default function StatusReducerCreator(PENDING, REJECTED, RESOLVED, RESET){
  return function(state = initialState, action){
    switch (action.type) {
      case PENDING: {
        return {...state, resolved: false, rejected: false, pending: true, errors: null}
      }
      case REJECTED: {
        return {...state, resolved: false, rejected: true, pending: false, errors: action.errors}
      }
      case RESOLVED: {
        return {...state, resolved: true, rejected: false, pending: false, errors: null}
      }
      case RESET: {
        return {...initialState}
      }
      default: return {...state}

    }
  }
}
