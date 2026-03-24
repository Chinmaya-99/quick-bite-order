import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Plus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { menuItems, categories } from "@/data/menu";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Coffee");
  const { addItem, totalItems } = useCart();
  const navigate = useNavigate();

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="p-2 -ml-2 text-foreground">
          <ArrowLeft size={22} />
        </button>
        <h1 className="font-display text-xl font-semibold text-foreground">Menu</h1>
        <button onClick={() => navigate("/cart")} className="relative p-2 -mr-2 text-foreground">
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-4 py-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold font-body whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-card rounded-xl overflow-hidden shadow-sm border border-border animate-fade-in"
          >
            <div className="aspect-square overflow-hidden">
              <img src={item.image} alt={item.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-body font-semibold text-foreground text-sm leading-tight">{item.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-bold text-base font-body">₹{item.price}</span>
                <button
                  onClick={() => addItem(item)}
                  className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center transition-all active:scale-90"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
          <button
            onClick={() => navigate("/cart")}
            className="w-full bg-primary text-primary-foreground font-body font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
          >
            <ShoppingBag size={20} />
            View Cart ({totalItems} items)
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
