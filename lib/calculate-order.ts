import menu from "@/data/menu.json";
import type { OrderInput, OrderTotals } from "./types";

const items = menu.items;
const round = (value: number) => Number(value.toFixed(2));

export function calculateOrder(input: OrderInput): OrderTotals {
  if (!input.lines.length) throw new Error("Add at least one item to your order.");
  let subtotal = 0;
  let partyQty = 0;
  let partyValue = 0;
  let subscriptionDiscount = 0;
  let loyaltyEligibleQty = 0;
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

    const topping = item.id === "double" && line.toppings ? item.toppingsAddOn ?? 5 : 0;
    const subscriptionPrice = item.id === "party" && line.subscription
      ? item.subscriptionPrice ?? item.price
      : item.price;
    subtotal += (subscriptionPrice + topping) * line.qty;

    if (item.id === "party") {
      partyQty += line.qty;
      partyValue += subscriptionPrice * line.qty;
      if (line.subscription) subscriptionDiscount += (item.price - subscriptionPrice) * line.qty;
    }
    if (item.id === "single" || item.id === "double") loyaltyEligibleQty += line.qty;
    if (item.catering) catering = true;
  }

  const partyDiscount = partyQty >= 3 ? round(partyValue * 0.05) : 0;
  const loyaltyDiscount = input.loyaltyClaim && loyaltyEligibleQty > 0
    ? round(Math.min(25, items.find((item) => item.id === "single")?.price ?? 25))
    : 0;
  const beforeReferral = subtotal - partyDiscount - loyaltyDiscount;
  const referralDiscount = input.referralConfirmed ? round(beforeReferral * 0.10) : 0;
  const discount = round(partyDiscount + loyaltyDiscount + referralDiscount);
  const discountedSubtotal = round(subtotal - discount);
  const delivery = input.fulfilment === "Delivery" && discountedSubtotal < menu.settings.freeDeliveryFrom
    ? menu.settings.deliveryFee
    : 0;
  const total = round(discountedSubtotal + delivery);
  const deposit = catering ? round(total * menu.settings.cateringDeposit) : 0;
  return {
    subtotal: round(subtotal), partyDiscount, subscriptionDiscount,
    loyaltyDiscount, referralDiscount, discount, delivery, total, deposit,
    balance: round(total - deposit), partyQty,
  };
}
