import * as t from '../types'

export enum ServerStatus { 
  IDLE, 
  FETCHING, 
  FETCH, 
  FETCH_ERROR
}

const initialState = {
    state: ServerStatus.IDLE,
  }


const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case t.TEST_STATE_1: {
      return {
        ...state,
        state: ServerStatus.FETCHING,
      }
    }
    case t.TEST_STATE_2: {
      return {
        ...state,
        state: ServerStatus.FETCH,
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default reducer