import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanSearch } from '../../redux/actions/action'
import Logo_ML from "../../assets/Logo_ML.png"
import searchIcon from "../../assets/ic_Search.png"
import "./searchBar.scss"

const SearchBar = () => {

  const [search, setSearch] = useState({ productName: "" })
  const { productName } = search

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (productName.length >= 2) {
      dispatch(cleanSearch())
      navigate(`/${productName}`)
    }
  }

  return (
    <div className="container-search">
      <div className="container-logo">
        <img
          src={Logo_ML}
          alt="logo-meli"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
      <form onSubmit={handleSubmit} className="container-form">
        <input type="text" placeholder="Nunca dejes de buscar" name="productName" onChange={handleChange} />
        <button type="submit"><img src={searchIcon} alt="search-icon" className="search-button" /></button>
      </form>
    </div>
  )
}

export default SearchBar