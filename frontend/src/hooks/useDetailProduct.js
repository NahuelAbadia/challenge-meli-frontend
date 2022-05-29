import { useState, useEffect, useCallback } from "react"
import { objVerified } from "../helpers/objVerified"
import { getProductDetail } from "../services/product"

export const useDetailProduct = (id) => {

  const [product, setProduct] = useState({})

  const viewDetail = useCallback(async () => {
    const detailProduct = await getProductDetail(id)
    setProduct(detailProduct)
  }, [id])

  useEffect(() => {
    if (objVerified(product)) {
      viewDetail()
    }
  }, [product, viewDetail])

  return {
    product
  }
}