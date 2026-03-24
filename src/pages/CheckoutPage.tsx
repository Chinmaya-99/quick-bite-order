import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const [phone, setPhone] = useState("");
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();

  const isValid = /^\d{10}$/.test(phone);

  const handlePay = () => {
    if (isValid) navigate("/success");
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center">
        <button onClick={() => navigate("/cart")} className="p-2 -ml-2 text-foreground">
          <ArrowLeft size={22} />
        </button>
        <h1 className="font-display text-xl font-semibold text-foreground ml-2">Checkout</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Phone Input */}
        <div>
          <label className="text-sm font-body font-semibold text-foreground mb-2 block">Phone Number</label>
          <input
            type="tel"
            maxLength={10}
            placeholder="Enter 10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className="w-full bg-card border border-border rounded-xl px-4 py-4 text-foreground font-body text-lg tracking-wider placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="font-body font-semibold text-foreground mb-3">Order Summary</h2>
          <div className="bg-card rounded-xl border border-border divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-body text-foreground text-sm">{item.name}</span>
                  <span className="text-muted-foreground text-xs ml-2">×{item.quantity}</span>
                </div>
                <span className="font-body font-semibold text-foreground text-sm">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-muted-foreground font-body">Total</span>
          <span className="text-foreground font-display text-2xl font-bold">₹{totalPrice}</span>
        </div>
        <button
          onClick={handlePay}
          disabled={!isValid}
          className="w-full bg-primary text-primary-foreground font-body font-semibold py-4 rounded-xl text-base transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
