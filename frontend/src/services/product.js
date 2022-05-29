import axios from "axios"
import { DATA_URL, KEY } from "../constants"

export const getProductDetail = async(id) => {
  const settings = { headers: { author: KEY }, params: { id } }
  const { data: detailProduct } = await axios.get(`${DATA_URL}${id}`, settings)

  return detailProduct
}