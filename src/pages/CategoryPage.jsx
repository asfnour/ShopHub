import ProductCard from '../components/ProductCard';

function CategoryPage({ products,  toggleFavorite, search, setSearch, minPrice, setMinPrice, maxPrice, setMaxPrice, activeCategory, setActiveCategory }) {
  return (
    <>
      <div className="bg-white shadow-md px-6 md:px-20 py-4">
        <div className="max-h-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">Category</label>
              <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                <option value="all">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="flex gap-3"><div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="minPrice">Min Price</label>
              <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min" className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" min="0" type="number" />
            </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="maxPrice">Max Price</label>
                <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max" className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" min="0" type="number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="search">Search</label>
              <input value={search} onChange={e => setSearch(e.target.value)} className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Search products..." type="text" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-20 bg-white">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  toggleFavorite={toggleFavorite}
                />
              ))
            ) : (
              <p className="text-gray-500">No products found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
