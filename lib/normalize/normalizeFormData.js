import { parseNumber } from "../number";

export const normalizeFormData = (formData) => {
  return {
    ...formData,
    price: parseNumber(formData.price),
    rate: parseNumber(formData.rate),
  };
};
