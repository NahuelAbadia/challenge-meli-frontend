import { useParams } from 'react-router-dom'
import { useDetailProduct } from '../../hooks/useDetailProduct'
import { convertDecimalNumber } from '../../helpers/convertDecimalNumber'
import SearchBar from '../searchBar/SearchBar'
import SearchInfo from '../../components/searchInfo/SearchInfo'
import "../searchProduct/searchProduct.scss"
import "./detailProduct.scss"

const DetailProduct = () => {

  const { id } = useParams()

  const { product } = useDetailProduct(id)

  return (
    <>
      <SearchBar />
      <SearchInfo />
      <div className="container-product">
        <div className="card-container">
          <div className="box">
            <div className="box-img">
              <img src={product.item?.picture} alt={product.item?.title} />
            </div>
            <div className="box-price">
              <p>{product.item?.condition === "new" ? "Nuevo" : "Usado"} - {product.item?.sold_quantity} vendidos</p>
              <h2>{product.item?.title}</h2>
              <h1>$ {convertDecimalNumber(product.item?.price.amount)}</h1>
              <button className="btn-meli">Comprar</button>
            </div>
          </div>
          <div className="box-desc">
            <h2>Descripción del producto</h2>
            <p>{product.item?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct