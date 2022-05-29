import { useParams } from 'react-router-dom'
import { useSearchProduct } from '../../hooks/useSearchProduct'
import Card from '../../components/card/Card'
import SearchInfo from '../../components/searchInfo/SearchInfo'
import SearchBar from '../searchBar/SearchBar'
import "./searchProduct.scss"

const SearchProduct = () => {

  const { productName } = useParams()

  const { dataProduct } = useSearchProduct(productName)

  return (
    <>
      <SearchBar />
      <div className="container-list">
        <SearchInfo />
        <div className="card-container">
          {dataProduct.items?.map(prod =>
            <Card
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              img={prod.picture}
              envio={prod.free_shipping}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default SearchProduct