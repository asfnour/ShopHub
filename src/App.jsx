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
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;