function Checkout() {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">Checkout</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>

        <input
          type="text"
          required
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>

        <input
          type="text"
          required
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>

        <input
          type="text"
          required
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
      >
        Pay Now
      </button>
    </form>
  );
}

export default Checkout;
