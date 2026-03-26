import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import biriyani from "../assets/biriyani.png";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
  
        <img
          src={biriyani}
          className="absolute inset-0 w-full h-full object-cover"
        /><img
          src={biriyani}
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Brew & Bite 
          </h1>
          <p className="text-lg mb-6">
            Fresh coffee. Delicious bites. Delivered fast.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="bg-primary px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* 🔥 FEATURES SECTION */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-card rounded-xl shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">⚡ Fast Delivery</h3>
            <p>Get your food in minutes, not hours.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-card rounded-xl shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">🍃 Fresh Ingredients</h3>
            <p>We use only fresh and high-quality ingredients.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-card rounded-xl shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">🍃 Fresh Ingredients</h3>
            <p>We use only fresh and high-quality ingredients.</p>
          </motion.div>
        </div>
      </div>

      {/* 🔥 CTA SECTION */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to order?
        </h2>

        <button
          onClick={() => navigate("/menu")}
          className="bg-primary px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Explore Menu
        </button>
      </div>

    </div>
  );
};

export default HomePage;