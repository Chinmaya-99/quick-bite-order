import type { MenuItem } from "@/context/CartContext";
import coffeeLatte from "@/assets/menu/coffee-latte.jpg";
import cappuccino from "@/assets/menu/cappuccino.jpg";
import americano from "@/assets/menu/americano.jpg";
import croissant from "@/assets/menu/croissant.jpg";
import muffin from "@/assets/menu/muffin.jpg";
import sandwich from "@/assets/menu/sandwich.jpg";
import pasta from "@/assets/menu/pasta.jpg";
import wrap from "@/assets/menu/wrap.jpg";

export const menuItems: MenuItem[] = [
  { id: "1", name: "Caffè Latte", price: 180, image: coffeeLatte, category: "Coffee" },
  { id: "2", name: "Cappuccino", price: 160, image: cappuccino, category: "Coffee" },
  { id: "3", name: "Americano", price: 140, image: americano, category: "Coffee" },
  { id: "4", name: "Butter Croissant", price: 120, image: croissant, category: "Snacks" },
  { id: "5", name: "Choco Muffin", price: 100, image: muffin, category: "Snacks" },
  { id: "6", name: "Grilled Sandwich", price: 200, image: sandwich, category: "Meals" },
  { id: "7", name: "Creamy Pasta", price: 250, image: pasta, category: "Meals" },
  { id: "8", name: "Chicken Wrap", price: 220, image: wrap, category: "Meals" },
];

export const categories = ["Coffee", "Snacks", "Meals"] as const;
