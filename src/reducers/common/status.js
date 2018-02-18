const initialState = {
  loading: false,
  loaded: false,
  error: null,
}

export default function StatusReducerCreator(PENDING, RESOLVED, REJECTED, RESET){
  return function(state = initialState, action){
    switch(action.type){
      case PENDING: {
        return {...state, loading: true}
      }
      case RESOLVED: {
        return {...state, loaded: true, loading: false}
      }
      case REJECTED: {
        return {...state, error: action.error}
      }
      case RESET: {
        return {...initialState}
      }
      default: return {...state}
    }

  }
}
