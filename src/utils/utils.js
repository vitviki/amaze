export const calculateDiscountPercentage = (currentPrice, originalPrice) => {
  const amount1 = Number(currentPrice.replace(/[!,@#$%^&₹*]/g, ""));
  const amount2 = Number(originalPrice.replace(/[!,@#$%^&₹*]/g, ""));

  return Math.floor(((amount2 - amount1) / ((amount1 + amount2) / 2)) * 100);
};
