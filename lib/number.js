export const parseNumber = (value) => {
  if (!value) return 0;

  // nokta ve virgülleri kaldır (TR format)
  const cleaned = value.toString().replace(/\./g, "").replace(",", ".");

  return Number(cleaned);
};
