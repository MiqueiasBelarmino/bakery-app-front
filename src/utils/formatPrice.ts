// src/utils/formatPrice.js
export function formatPrice(amount: number) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "BRL",
    });
  }
  