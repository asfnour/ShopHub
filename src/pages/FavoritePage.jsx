import ProductCard from "../components/ProductCard";

function FavoritesPage({ products, toggleFavorite }) {
  const favoriteProducts = products.filter((p) => p.isFavorite);

  return (
    <div className="bg-white px-10 md:px-20 py-4">
      <h1 className="text-2xl font-bold mb-6 mt-50 ml-50">My Favorites </h1>

      {favoriteProducts.length === 0 ? (
        <p className="text-gray-500 ml-50">No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;