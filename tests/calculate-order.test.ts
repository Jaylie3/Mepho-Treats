import { describe, expect, it } from "vitest";
import { calculateOrder } from "../lib/calculate-order";
describe("calculateOrder", () => {
  it("adds the double-cup topping charge", () => {
    const result = calculateOrder({lines:[{itemId:"double",flavour:"vanilla",qty:3,toppings:true}],fulfilment:"Collection"});
    expect(result.subtotal).toBe(135);
  });
  it("applies 5% only at three Party Tubs", () => {
    expect(calculateOrder({lines:[{itemId:"party",flavour:"vanilla",qty:2}],fulfilment:"Collection"}).discount).toBe(0);
    expect(calculateOrder({lines:[{itemId:"party",flavour:"vanilla",qty:3}],fulfilment:"Collection"}).discount).toBe(22.5);
  });
  it("waives delivery at R200", () => {
    expect(calculateOrder({lines:[{itemId:"family",flavour:"vanilla",qty:2},{itemId:"single",flavour:"vanilla",qty:1}],fulfilment:"Delivery"}).delivery).toBe(15);
    expect(calculateOrder({lines:[{itemId:"party",flavour:"vanilla",qty:2}],fulfilment:"Delivery"}).delivery).toBe(0);
  });
  it("calculates 50% catering deposit", () => {
    const result=calculateOrder({lines:[{itemId:"cat2",flavour:"vanilla",qty:1}],fulfilment:"Collection"});
    expect(result.deposit).toBe(140); expect(result.balance).toBe(140);
  });
  it("rejects mixed alternative flavour and standard cup", () => {
    expect(()=>calculateOrder({lines:[{itemId:"single",flavour:"coconut",qty:1}],fulfilment:"Collection"})).toThrow();
  });
});
