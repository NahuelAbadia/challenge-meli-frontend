import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { objVerified } from "../helpers/objVerified"
import { getProductData } from "../redux/actions/action"

export const useSearchProduct = (productName) => {
  const dataProduct = useSelector(state => state.dataProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    if (objVerified(dataProduct)) {
      dispatch(getProductData(productName))
    }
  }, [dataProduct, dispatch, productName])

  return {
    dataProduct
  }
}