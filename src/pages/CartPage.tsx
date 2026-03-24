import { useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <p className="text-muted-foreground text-lg font-body mb-4">Your cart is empty</p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-xl"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center">
        <button onClick={() => navigate("/menu")} className="p-2 -ml-2 text-foreground">
          <ArrowLeft size={22} />
        </button>
        <h1 className="font-display text-xl font-semibold text-foreground ml-2">Your Cart</h1>
      </div>

      {/* Items */}
      <div className="px-4 py-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-xl p-3 flex gap-3 border border-border animate-fade-in">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" loading="lazy" width={512} height={512} />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-body font-semibold text-foreground text-sm">{item.name}</h3>
                <p className="text-primary font-bold text-sm font-body">₹{item.price}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-foreground font-semibold font-body text-sm w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-destructive p-1">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-muted-foreground font-body">Total</span>
          <span className="text-foreground font-display text-2xl font-bold">₹{totalPrice}</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-primary text-primary-foreground font-body font-semibold py-4 rounded-xl text-base transition-all active:scale-[0.98]"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
