export const formatCurrency = (value, fractionDigits = 1) => {
  if (value === null || value === undefined) return "";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(Number(value));
};
