import { useNavigate } from "react-router-dom";
import cafeBanner from "@/assets/cafe-banner.jpg";
import cafeLogo from "@/assets/cafe-logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img src={cafeBanner} alt="Brew & Bite Café" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-6 -mt-24 relative z-10">
        <div className="w-20 h-20 rounded-full bg-card shadow-lg flex items-center justify-center mb-4 border-4 border-card">
          <img src={cafeLogo} alt="Logo" className="w-14 h-14 object-contain" width={512} height={512} />
        </div>
        <h1 className="font-display text-3xl font-bold text-primary-foreground mb-1">Brew & Bite</h1>
        <p className="text-primary-foreground/80 font-body text-sm mb-8">Artisan Coffee & Fresh Bites</p>

        <div className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-sm text-center animate-fade-in">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2 font-body">Welcome</p>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Scan & Order</h2>
          <p className="text-muted-foreground text-base mb-8">Skip the line, grab your favorites.</p>
          <button
            onClick={() => navigate("/menu")}
            className="w-full bg-primary text-primary-foreground font-body font-semibold py-4 rounded-xl text-lg transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Start Ordering
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
