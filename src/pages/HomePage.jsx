import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Laptop, Shirt, Sofa } from "lucide-react";
function HomePage({ products, toggleFavorite}) {
  return (
    <main className="flex-grow">
      <div>
        <div className="relative bg-cover bg-center h-[600px] flex items-center justify-start text-white px-4 md:px-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')" }}>
          <div className="bg-opacity-50 p-2 text-left pl-10 sm:pl-16 md:pl-40 lg:pl-48 xl:pl-64">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to ShopHub</h1>
            <p className="text-xl sm:text-2xl md:text-2xl mb-8">Discover amazing products at great prices</p>
            <Link className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center w-max justify-center" to="/categories" data-discover="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag mr-2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Start Shopping
            </Link>
          </div>
        </div>
        <Link to="/categories" data-discover="true">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link className="relative h-64 overflow-hidden rounded-lg cursor-pointer  group">
                <Laptop size={40} alt=" Electronics" className="w-full h-full  object-cover transform group-hover:scale-115 transition duration-300 brightness-65"/>
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-2xl font-bold bg-black"> Electronics</h3>
                </div>
              </Link>
              <Link className="relative h-64 overflow-hidden rounded-lg cursor-pointer  group">
                <Shirt size={40} alt=" Fashion" className="w-full h-full  object-cover transform  group-hover:scale-115 transition duration-300 brightness-65" />
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-2xl font-bold bg-black"> Fashion</h3>
                </div>
              </Link>
              <Link className="relative h-64 overflow-hidden rounded-lg cursor-pointer  group">
                <Sofa size={40} alt=" Home &amp; Living" className="w-full h-full  object-cover transform group-hover:scale-115 transition duration-300 brightness-65" />
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-2xl font-bold bg-black"> Home &amp; Living</h3>
                </div>
              </Link>
            </div>
          </div>
        </Link>
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-20 bg-white">
              {products.map((product) => (
                <ProductCard
                  key={product.id} 
                  product={product}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" to="/categories" data-discover="true">
              View All Products
              </Link>
            </div>
          </div>
        </section>
      </div >
    </main >
  );
} export default HomePage;