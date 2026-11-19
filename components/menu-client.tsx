"use client";
import { useMemo, useState } from "react";
import menu from "@/data/menu.json";
import type { CartLine, OrderInput } from "@/lib/types";
import { calculateOrder } from "@/lib/calculate-order";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function MenuClient() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fulfilment, setFulfilment] = useState<"Collection"|"Delivery">("Collection");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<"SnapScan"|"Capitec Pay"|"Cash on delivery">("Cash on delivery");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const totals = useMemo(() => cart.length ? calculateOrder({lines: cart, fulfilment}) : null, [cart, fulfilment]);
  function add(itemId: string, flavour: string) {
    setError("");
    setCart((old) => {
      const index = old.findIndex((line) => line.itemId === itemId && line.flavour === flavour);
      if (index >= 0) return old.map((line, i) => i === index ? {...line, qty: line.qty + 1} : line);
      return [...old, {itemId, flavour, qty: 1}];
    });
  }
  function update(index: number, delta: number) {
    setCart((old) => old.map((line, i) => i === index ? {...line, qty: line.qty + delta} : line).filter(line => line.qty > 0));
  }
  function checkout() {
    try {
      if (!name.trim() || !phone.trim()) throw new Error("Please add your name and WhatsApp number.");
      if (fulfilment === "Delivery" && !address.trim()) throw new Error("Please add your delivery address.");
      const input: OrderInput = {lines: cart, customerName:name, phone, fulfilment, address, paymentMethod:payment, notes};
      const result = calculateOrder(input);
      window.open(buildWhatsAppUrl(input, result), "_blank", "noopener,noreferrer");
    } catch (e) { setError(e instanceof Error ? e.message : "Please check your order."); }
  }
  return <div className="menu-layout"><div className="products-grid">
    {menu.items.filter(i => !i.catering).map(item => <article className="product-card" key={item.id}>
      <div className={`product-art art-${item.id}`}><span>{item.id === "parfait" ? "BERRY" : item.id.startsWith("alt") ? "PLANT-BASED" : "MEPHO"}</span><div className="scoop scoop-one"/><div className="scoop scoop-two"/></div>
      <div className="product-info"><div><p className="eyebrow">{item.size}</p><h3>{item.name}</h3><p className="muted">{item.notes || "A little happiness in every scoop."}</p></div><strong className="price">R{item.price}</strong></div>
      <div className="flavour-buttons">{menu.flavours.filter(f => item.flavourSet ? f.set === item.flavourSet : f.set === "core").map(flavour =>
        <button key={flavour.id} className="button button-outline" onClick={() => add(item.id, flavour.id)}>+ {flavour.name}</button>)}</div>
    </article>)}
  </div>
  <aside className="cart-panel"><div className="cart-heading"><div><p className="eyebrow">YOUR GOOD STUFF</p><h2>Your order</h2></div><span className="cart-count">{cart.reduce((n,l)=>n+l.qty,0)}</span></div>
    {cart.length === 0 ? <p className="muted cart-empty">Your cart is waiting for something delicious. Choose a flavour to get started.</p> :
      <div className="cart-lines">{cart.map((line,i) => { const item=menu.items.find(x=>x.id===line.itemId)!; const flavour=menu.flavours.find(x=>x.id===line.flavour)!; return <div className="cart-line" key={`${line.itemId}-${line.flavour}`}><div><b>{flavour.name}</b><small>{item.name} · R{item.price}</small></div><div className="qty"><button aria-label="Decrease quantity" onClick={()=>update(i,-1)}>−</button><span>{line.qty}</span><button aria-label="Increase quantity" onClick={()=>update(i,1)}>+</button></div></div>})}</div>}
    {totals && <div className="totals"><p><span>Subtotal</span><b>R{totals.subtotal.toFixed(2)}</b></p><p><span>Party Tub discount</span><b>−R{totals.discount.toFixed(2)}</b></p><p><span>Delivery estimate</span><b>{fulfilment==="Delivery" ? `R${totals.delivery}` : "Collection"}</b></p><p className="grand-total"><span>Total</span><b>R{totals.total.toFixed(2)}</b></p></div>}
    <div className="checkout-fields"><label>Your name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/></label><label>WhatsApp number<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="e.g. 082 123 4567" inputMode="tel"/></label>
      <label>Collection or delivery<select value={fulfilment} onChange={e=>setFulfilment(e.target.value as "Collection"|"Delivery")}><option>Collection</option><option>Delivery</option></select></label>
      {fulfilment==="Delivery" && <label>Delivery address<input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Your address"/></label>}
      <label>Payment method<select value={payment} onChange={e=>setPayment(e.target.value as typeof payment)}><option>Cash on delivery</option><option>SnapScan</option><option>Capitec Pay</option></select></label>
      <label>Notes or allergies<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Anything we should know?"/></label>
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button checkout-button" disabled={!cart.length} onClick={checkout}>Continue to WhatsApp <span>↗</span></button>
    <small className="cart-footnote">Orders close Thursday at 17:00. Delivery is R15, free from R200.</small>
  </aside></div>;
}
