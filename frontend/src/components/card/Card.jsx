import { useNavigate } from 'react-router-dom'
import ic_shipping from "../../assets/ic_shipping.png"
import "./card.scss"

const Card = ({ id, title, price, img, envio }) => {

  const navigate = useNavigate()

  const redirectToProduct = () => {
    navigate(`/${id}/description`)
  }

  return (
    <div className="card">
      <div className="card-info">
        <div className="card-foto" onClick={redirectToProduct}>
          <img src={img} alt={title} />
        </div>
        <div className="card-desc">
          <div className="card-price">
            <h2>$ {price}</h2>
            {envio === true ? <img src={ic_shipping} alt="ic_shipping" className="card-img" /> : null}
          </div>
          <h3 onClick={redirectToProduct}>{title}</h3>
        </div>
      </div>
      <div className="card-ubication">
        <p>Capital Federal</p>
      </div>
    </div>
  )
}

export default Card