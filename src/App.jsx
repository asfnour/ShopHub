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
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState(''); 
  const [activeCategory, setActiveCategory] = useState('all');
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const getInitialProducts = () => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : initialProducts;
  };

  const [products, setProducts] = useState(getInitialProducts);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, isFavorite: !p.isFavorite }
          : p
      )
    );
  };
  const filteredProducts = products
    .filter((product) => {
      if (activeCategory === "all") return true;
      return product.category === activeCategory;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => {
      if (!minPrice) return true;
      return product.price >= Number(minPrice);
    })
    .filter((product) => {
      if (!maxPrice) return true;
      return product.price <= Number(maxPrice);
    });
  return (
    <div className="">
      <NavBar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage products={products} toggleFavorite={toggleFavorite} />} />
        <Route path="/categories" element={<CategoryPage products={filteredProducts} toggleFavorite={toggleFavorite} search={search} setSearch={setSearch} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<FavoritesPage products={products} toggleFavorite={toggleFavorite} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;