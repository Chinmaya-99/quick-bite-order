import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

// 👇 Replace with the café owner's WhatsApp number (with country code, no + or spaces)
const CAFE_WHATSAPP = "918847841397";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();

  const isValid = name.trim().length > 0 && /^\d{10}$/.test(phone);

  const handleOrder = () => {
    if (!isValid) return;

    // Build WhatsApp message
    const orderLines = items
      .map((item) => `  • ${item.name} x${item.quantity} — ₹${item.price * item.quantity}`)
      .join("\n");

    const message =
      `🛒 *New Order from Brew & Bite*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n\n` +
      `📋 *Order Details:*\n${orderLines}\n\n` +
      `💰 *Total: ₹${totalPrice}*\n\n` +
      `_Sent via Brew & Bite website_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CAFE_WHATSAPP}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Navigate to success page with details
    navigate("/success", {
      state: { name, phone, fromCheckout: true },
    });
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
        {/* Name Input */}
        <div>
          <label className="text-sm font-body font-semibold text-foreground mb-2 block">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-card border border-border rounded-xl px-4 py-4 text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="text-sm font-body font-semibold text-foreground mb-2 block">
            Phone Number
          </label>
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
                <span className="font-body font-semibold text-foreground text-sm">
                  ₹{item.price * item.quantity}
                </span>
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
          onClick={handleOrder}
          disabled={!isValid}
          className="w-full bg-[#25D366] text-white font-body font-semibold py-4 rounded-xl text-base transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
