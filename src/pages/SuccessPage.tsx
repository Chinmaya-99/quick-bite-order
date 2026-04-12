import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { name: string; phone: string; fromCheckout: boolean } | null;

  // Route guard — prevent direct URL access
  useEffect(() => {
    if (!state?.fromCheckout) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state?.fromCheckout) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center animate-scale-in w-full max-w-sm">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-success" />
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Order Sent!</h1>
        <p className="text-muted-foreground font-body mb-8">
          Your order has been sent to the café via WhatsApp
        </p>

        {/* Order Info Card */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6 shadow-sm text-left space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm font-body">Name</span>
            <span className="font-body font-semibold text-foreground">{state.name}</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm font-body">Phone</span>
            <span className="font-body font-semibold text-foreground">{state.phone}</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm font-body">Status</span>
            <span className="text-[#25D366] font-body font-semibold text-sm">Sent via WhatsApp ✓</span>
          </div>
        </div>

        <p className="text-muted-foreground font-body text-sm mb-8">
          The café will confirm your order shortly. Please be ready at the counter.
        </p>

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
