import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function CartPage() {
    const item = {
      id: 1,
      name: "Modern Laptop",
      description: "High-performance laptop for professionals",
      price: 999.99,
      quantity: 1,
      image_url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    };

    return (
        <main className="flex-grow">
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* LEFT */}
                        <CartItem item={item} />
                        <OrderSummary item={item} />
                    </div>
                </main>
            </div>
        </main>
    );
}
export default CartPage;
