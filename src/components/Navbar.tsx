import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { Label } from "recharts";
const links = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Order", path:"/order"},
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 -ml-2 text-foreground"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Café Name / Logo placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            {/* Replace with <img src={cafeLogo} /> when logo is ready */}
            <Coffee size={16} className="text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">Brew & Bite</span>
        </div>

        {/* Right spacer to keep title centered */}
        <div className="w-10" />
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-[60] bg-card border-r border-border shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Coffee size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-display text-base font-bold text-foreground leading-tight">Brew & Bite</p>
              <p className="text-muted-foreground text-xs font-body">Artisan Coffee & Fresh Bites</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="px-3 py-4 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`w-full text-left px-4 py-3 rounded-xl font-body font-semibold text-base transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom tag */}
        <div className="absolute bottom-6 left-0 right-0 px-5">
          <p className="text-muted-foreground text-xs font-body text-center">
            © 2025 Brew & Bite Café
          </p>
        </div>
      </aside>

      {/* Spacer so page content doesn't hide under the top bar */}
      <div className="h-[52px]" />
    </>
  );
};

export default Navbar;
