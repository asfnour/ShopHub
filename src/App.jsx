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
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { initialProducts, categories } from "./lib/data";
import Footer from './components/Footer';
import CheckoutPage from './pages/CheckoutPage';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

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

  const filteredProducts = products.filter((product) =>{
    const matchCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    // !"" = true if minprice = ""
    const matchMin =
      !minPrice || product.price >= Number(minPrice);

    const matchMax =
      !maxPrice || product.price <= Number(maxPrice);

    return matchCategory && matchSearch && matchMin && matchMax;
  });

  return (
    <div className="">
      <NavBar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage products={products} toggleFavorite={toggleFavorite} />} />
        <Route path="/categories" element={<CategoryPage products={filteredProducts} toggleFavorite={toggleFavorite} search={search} setSearch={setSearch} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<ProtectedRoute> <FavoritesPage products={products} toggleFavorite={toggleFavorite} /> </ProtectedRoute>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;