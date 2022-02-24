const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
  // more items...
};

const getTotalPriceOfShoppingBag = (shoppingBag = []) => {
  let totalPrice = 0;
  for (const { product = "", quantity = 0 } of shoppingBag) {
    const { price = 0, discount = 0 } = groceries[product] ?? {};
    const discountAmount = (price / 100) * discount;
    const priceWithDiscount = price - discountAmount;
    totalPrice += priceWithDiscount * quantity;
  }
  return totalPrice.toFixed(2);
};

const shoppingBag = [
  { product: "Chocolate", quantity: 3 },
  { product: "Orange Juice", quantity: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 37.05
