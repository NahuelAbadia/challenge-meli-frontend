import "./searchInfo.scss"

const SearchInfo = ({ categories }) => {
  return (
    <div className="search-container">
      <p className="text">
        {categories?.map((cat, index) => categories[index + 1] ? `${cat} > ` : <span key={cat}>{cat}</span>)}
      </p>
    </div>
  )
}

export default SearchInfo