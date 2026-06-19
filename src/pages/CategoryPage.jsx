import ProductCard from '../components/ProductCard';

function CategoryPage({ products }) {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-h-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" for="category">Category</label>
              <select id="category" className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                <option value="">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="flex gap-3"><div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2" for="minPrice">Min Price</label>
              <input id="minPrice" placeholder="Min" className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" min="0" type="number" value="" />
            </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2" for="maxPrice">Max Price</label>
                <input placeholder="Max" className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" min="0" type="number" value="" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" for="search">Search</label>
              <input className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Search products..." type="text" value="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-20 bg-white">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;