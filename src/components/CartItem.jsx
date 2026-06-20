import { FaTrash } from "react-icons/fa";
function CartItem({ item }) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white flex rounded-lg shadow-md overflow-hidden">
        {/* IMAGE */}
        <img className="w-32 h-32 object-cover" src={item.image_url} />

        {/* INFO */}
        <div className="flex-grow p-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>

          <p className="text-sm text-gray-500">{item.description}</p>

          {/* QTY UI ONLY */}
          <div className="mt-4 flex items-center space-x-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition">
              -
            </button>

            <span className="px-2">{item.quantity}</span>

            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition">
              +
            </button>
            {/* REMOVE */}
            <button
              aria-label="Remove item"
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <FaTrash size={20} />
            </button>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <p className="text-lg font-bold">${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
