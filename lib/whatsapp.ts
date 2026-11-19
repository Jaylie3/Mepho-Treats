import menu from "@/data/menu.json";
import type { OrderInput, OrderTotals } from "./types";

const money = (value: number) => `R${value.toFixed(2)}`;

export function buildWhatsAppUrl(input: OrderInput, totals: OrderTotals): string {
  const lines = input.lines.map((line) => {
    const item = menu.items.find((entry) => entry.id === line.itemId)!;
    const flavour = menu.flavours.find((entry) => entry.id === line.flavour)!;
    const topping = line.itemId === "double" && line.toppings ? " (with toppings)" : "";
    const subscription = line.subscription ? " — Friday subscription price" : "";
    return `${line.qty} x ${flavour.name} — ${item.name} ${item.size}${topping}${subscription}`;
  });
  const message = [
    "Hello Mepho Treats! I'd like to place an order.",
    `Name: ${input.customerName || "Not provided"}`,
    `Phone: ${input.phone || "Not provided"}`,
    "Order:", ...lines,
    `Subtotal: ${money(totals.subtotal)}`,
    totals.partyDiscount ? `Party Tub discount: -${money(totals.partyDiscount)}` : "",
    totals.subscriptionDiscount ? `Friday subscription saving: -${money(totals.subscriptionDiscount)}` : "",
    totals.loyaltyDiscount ? `Loyalty reward: -${money(totals.loyaltyDiscount)}` : "",
    totals.referralDiscount ? `Owner-confirmed referral reward: -${money(totals.referralDiscount)}` : "",
    `Delivery: ${money(totals.delivery)}`,
    `TOTAL: ${money(totals.total)}`,
    totals.deposit ? `50% catering deposit: ${money(totals.deposit)} (balance ${money(totals.balance)})` : "",
    `Fulfilment: ${input.fulfilment}`,
    input.fulfilment === "Delivery" ? `Address: ${input.address || "To be confirmed"}` : "",
    `Preferred date: ${input.preferredDate || "Next available collection/delivery day"}`,
    `Payment: ${input.paymentMethod || "To be confirmed"}`,
    input.notes?.trim() ? `Notes / allergies: ${input.notes.trim().slice(0, 350)}` : ""
  ].filter(Boolean).join("\n");
  return `https://wa.me/${menu.settings.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
