import { useParams } from 'react-router-dom'
import { useSearchProduct } from '../../hooks/useSearchProduct'
import Card from '../../components/card/Card'
import SearchBar from '../searchBar/SearchBar'
import SearchInfo from '../../components/searchInfo/SearchInfo'
import "./searchProduct.scss"

const SearchProduct = () => {

  const { productName } = useParams()

  const { dataProduct } = useSearchProduct(productName)

  return (
    <>
      <SearchBar />
      <SearchInfo />
      <div className="container-list">
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