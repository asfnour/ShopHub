function ProductCard({ product, toggleFavorite }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <button  onClick={() => toggleFavorite(product.id)} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full shadow-md hover transition">
                    <svg
                        stroke="currentColor"
                        fill={product.isFavorite ? "red" : "black"}
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                    >
                        <g>
                            <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                            </path>
                        </g>
                    </svg>
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
