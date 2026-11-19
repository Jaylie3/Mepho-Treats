import menu from "@/data/menu.json";
import type { CartLine, OrderInput, OrderTotals } from "./types";

const items = menu.items;
export function calculateOrder(input: OrderInput): OrderTotals {
  if (!input.lines.length) throw new Error("Add at least one item to your order.");
  let subtotal = 0;
  let partyQty = 0;
  let partyValue = 0;
  let catering = false;
  for (const line of input.lines) {
    const item = items.find((entry) => entry.id === line.itemId);
    if (!item) throw new Error("One of your selected items is unavailable.");
    if (!Number.isInteger(line.qty) || line.qty < 1 || line.qty > 99) {
      throw new Error("Choose a quantity between 1 and 99.");
    }
    const flavour = menu.flavours.find((entry) => entry.id === line.flavour);
    if (!flavour) throw new Error("Please choose a flavour for every item.");
    if (item.flavourSet && item.flavourSet !== flavour.set) {
      throw new Error("Please match alternative cups with a dairy-free or sugar-free flavour.");
    }
    if (!item.flavourSet && flavour.set === "alternative") {
      throw new Error("Dairy-free and sugar-free flavours must use an alternative cup.");
    }
    const unit = item.price + (item.id === "double" && line.toppings ? 5 : 0);
    subtotal += unit * line.qty;
    if (item.id === "party") { partyQty += line.qty; partyValue += item.price * line.qty; }
    if (item.catering) catering = true;
  }
  const discount = partyQty >= 3 ? Number((partyValue * 0.05).toFixed(2)) : 0;
  const delivery = input.fulfilment === "Delivery" && subtotal - discount < 200 ? 15 : 0;
  const total = Number((subtotal - discount + delivery).toFixed(2));
  const deposit = catering ? Number((total * 0.5).toFixed(2)) : 0;
  return { subtotal, discount, delivery, total, deposit, balance: Number((total - deposit).toFixed(2)), partyQty };
}
