import FavoriteButton from "./FavoriteButton";
function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                </div>
                <button aria-label="Remove from favorites" className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full shadow-md hover transition">
                    <FavoriteButton />
                </button>
                <div className="mt-4 p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="mt-3 flex justify-between items-center">
                        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add to Cart</button>
                    </div>
                </div>
            </div>
    
    );
}

export default ProductCard;
