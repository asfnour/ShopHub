import NavBar from './components/NavBar';
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import FavoritesPage from './pages/FavoritePage';
import CartPage from './pages/CartPage';
import ProductCard from './components/ProductCard';
import { initialProducts, categories } from "./lib/data";
function App() {
  return (
    
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage products={initialProducts} />} />
        <Route path="/categories" element={<CategoryPage products={initialProducts} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;