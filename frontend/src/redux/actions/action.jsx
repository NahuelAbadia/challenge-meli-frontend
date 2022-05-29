import { DATA_URL } from "../../constants"
import axios from "axios"

export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA"
export const CLEAN_SEARCH = "CLEAN_SEARCH"

export function getProductData(productName) {
  return async function (dispatch) {
    try {
      const settings = { headers: { author: "Nahuel Abadia" }, params: { search: productName } }

      const productsResponse = await axios.get(`${DATA_URL}`, settings)

      return dispatch({
        type: GET_PRODUCT_DATA,
        payload: productsResponse.data
      })
      
    } catch (error) {
      throw (error);
    }
  }
}

export function cleanSearch() {
  return {
    type: CLEAN_SEARCH,
    payload: {}
  }
}
