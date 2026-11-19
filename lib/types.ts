export type MenuItem = {
  id: string; name: string; size: string; litres: number; price: number;
  toppingsAddOn?: number; notes?: string; discountQty?: number;
  discountPct?: number; subscriptionPrice?: number; catering?: boolean;
  flavourSet?: "core" | "alternative";
};
export type Flavour = { id: string; name: string; set: "core" | "alternative" };
export type CartLine = { itemId: string; flavour: string; qty: number; toppings?: boolean };
export type Fulfilment = "Collection" | "Delivery";
export type PaymentMethod = "SnapScan" | "Capitec Pay" | "Cash on delivery";
export type OrderInput = {
  lines: CartLine[]; fulfilment: Fulfilment; address?: string;
  customerName?: string; phone?: string; preferredDate?: string;
  paymentMethod?: PaymentMethod; notes?: string;
};
export type OrderTotals = {
  subtotal: number; discount: number; delivery: number; total: number;
  deposit: number; balance: number; partyQty: number;
};
