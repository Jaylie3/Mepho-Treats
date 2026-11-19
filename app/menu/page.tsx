import type { Metadata } from "next";
import { MenuClient } from "@/components/menu-client";
export const metadata: Metadata = { title: "Menu & Prices", description: "Explore Mepho Treats homemade ice cream flavours, cups and tubs." };
export default function MenuPage() { return <main className="page-shell"><div className="page-intro"><p className="eyebrow">MADE TO MAKE YOU SMILE</p><h1>The menu.</h1><p>Pick your scoop, choose your flavour and build your happy place. Cups from R25.</p></div><MenuClient/><p className="allergen-note"><b>A little note about allergens:</b> Our home kitchen handles milk, egg, gluten, peanuts and tree nuts. Ingredient and cross-contact details must be confirmed before launch. Please tell us about allergies in your order notes.</p></main>; }
