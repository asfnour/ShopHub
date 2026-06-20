import { Link } from "react-router-dom";
function OrderSummary({ item }) {
  const total = item.price * item.quantity;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md p-6 h-max sticky top-28">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${item.price}</span>
      </div>

      <div className="flex justify-between mb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <hr />

      <div className="flex justify-between text-xl font-bold mb-6">
        <span>Total</span>
        <span>${total}</span>
      </div>

      {/* Checkout */}
      <Link to="/checkout">
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 ">
          Proceed to Checkout
        </button>
      </Link>

      {/* Clear Cart */}
      <button className="w-full mt-4 text-red-600 hover:underline">
        Clear Cart
      </button>
    </div>
  );
}

export default OrderSummary;
