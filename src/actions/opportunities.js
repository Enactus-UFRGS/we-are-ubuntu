import { getAll } from '../model/opportunity'
import {
  FETCH_OPPORTUNITIES_RESOLVED,
  FETCH_OPPORTUNITIES_REJECTED,
  FETCH_OPPORTUNITIES_PENDING,
} from '../actionNames/opportunities'

export function getAllOpportunities(){
  return (dispatch) => {
    dispatch({ type:FETCH_OPPORTUNITIES_PENDING })
    return getAll()
      .then(opportunities => dispatch({ type: FETCH_OPPORTUNITIES_RESOLVED, opportunities }))
      .catch(error => dispatch({ type: FETCH_OPPORTUNITIES_REJECTED, error }))
  }
}
