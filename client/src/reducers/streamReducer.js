import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";


const streamReducer =  (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:      
      return { ...state, [action.payload.id]: action.payload}
    case FETCH_STREAMS:
      return
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload}
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload}
    case DELETE_STREAM:
      return
    default:
      return state
  }
}

export default streamReducer