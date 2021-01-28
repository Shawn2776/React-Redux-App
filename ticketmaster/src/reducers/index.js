import { FETCH_IMAGE_START, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL } from '../actions/index';

const initialState = {
 message: "",
 isFetching: false,
 error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH_IMAGE_START):
    return ({
      ...state,
      isFetching: true,
      message: '',
      error: ''
    })

    case(FETCH_IMAGE_SUCCESS):
    return ({
      ...state,
      message: action.payload,
      isFetching: false,
      error: ''
    })

    case(FETCH_IMAGE_FAIL):
    return ({
      ...state,
      message: null,
      isFetching: false,
      error: action.payload
    })
    
    default:
      return(state)
  }
}