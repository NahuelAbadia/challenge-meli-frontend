import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEARCH_BAR, SEARCH_PRODUCT, DETAIL_PRODUCT, } from "./routes/routes"
import Layout from './layout/Layout';
import DetailProduct from './pages/detailProduct/DetailProduct';
import SearchBar from './pages/searchBar/SearchBar';
import SearchProduct from './pages/searchProduct/SearchProduct';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={SEARCH_BAR} element={<SearchBar />} />
          <Route path={SEARCH_PRODUCT} element={<SearchProduct />} />
          <Route path={DETAIL_PRODUCT} element={<DetailProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
