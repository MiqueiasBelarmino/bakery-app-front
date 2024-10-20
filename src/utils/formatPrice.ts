export function formatPrice(amount: any) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "BRL",
    });
  }
  