import menu from "@/data/menu.json";
import type { OrderInput, OrderTotals } from "./types";

const number = menu.settings.whatsappNumber;
const money = (value: number) => `R${value.toFixed(2)}`;
export function buildWhatsAppUrl(input: OrderInput, totals: OrderTotals): string {
  const lines = input.lines.map((line) => {
    const item = menu.items.find((entry) => entry.id === line.itemId)!;
    const flavour = menu.flavours.find((entry) => entry.id === line.flavour)!;
    const toppings = line.itemId === "double" && line.toppings ? " (with toppings)" : "";
    return `${line.qty} x ${flavour.name} — ${item.name} ${item.size}${toppings}`;
  });
  const note = (input.notes || "").slice(0, 350);
  const message = [
    "Hello Mepho Treats! I'd like to place an order.",
    `Name: ${input.customerName || "Not provided"}`,
    `Phone: ${input.phone || "Not provided"}`,
    "Order:", ...lines,
    `Subtotal: ${money(totals.subtotal)}`,
    `Party Tub discount: -${money(totals.discount)}`,
    `Delivery: ${money(totals.delivery)}`,
    `TOTAL: ${money(totals.total)}`,
    totals.deposit ? `50% catering deposit: ${money(totals.deposit)} (balance ${money(totals.balance)})` : "",
    `Fulfilment: ${input.fulfilment}`,
    input.fulfilment === "Delivery" ? `Address: ${input.address || "To be confirmed"}` : "",
    `Preferred date: ${input.preferredDate || "Next available Friday/Saturday"}`,
    `Payment: ${input.paymentMethod || "To be confirmed"}`,
    note ? `Notes / allergies: ${note}` : ""
  ].filter(Boolean).join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
