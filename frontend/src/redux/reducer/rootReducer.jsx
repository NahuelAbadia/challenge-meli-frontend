import { GET_PRODUCT_DATA, CLEAN_SEARCH } from "../actions/action"

const initialState = {
  dataProduct: {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return {
        ...state,
        dataProduct: action.payload,
      }
    case CLEAN_SEARCH:
      return {
        ...state,
        dataProduct: action.payload
      }
    default:
      return state
  }
}