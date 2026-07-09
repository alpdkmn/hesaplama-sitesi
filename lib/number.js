export const parseNumber = (value) => {
  if (!value) return 0;

  const cleaned = value
    .toString()
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^0-9.-]/g, "");

  const num = Number(cleaned);

  return isNaN(num) ? 0 : num;
};
