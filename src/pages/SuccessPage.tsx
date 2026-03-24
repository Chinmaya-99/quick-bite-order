import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useMemo } from "react";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const token = useMemo(() => {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const num = Math.floor(100 + Math.random() * 900);
    return `${letter}${num}`;
  }, []);

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-success" />
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Order Placed!</h1>
        <p className="text-muted-foreground font-body mb-8">Your order is being prepared</p>

        <div className="bg-card rounded-2xl border border-border p-8 mb-8 shadow-sm">
          <p className="text-muted-foreground text-sm font-body uppercase tracking-widest mb-2">Your Token</p>
          <p className="font-display text-5xl font-bold text-primary">{token}</p>
          <p className="text-muted-foreground font-body text-sm mt-4">Show this token at the counter</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-primary text-primary-foreground font-body font-semibold py-4 rounded-xl text-base transition-all active:scale-[0.98]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
