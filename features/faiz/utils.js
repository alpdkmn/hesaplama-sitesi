import { formatCurrency } from "@/lib/format";
import { parseNumber } from "../../lib/number";

export function calculateInterest({ amount, rate, month, interestType }) {
  const P = parseNumber(amount);
  const r = Number(rate) / 100;
  const t = Number(month) / 12;

  let total;

  if (interestType === "simple") {
    total = P * (1 + r * t);
  } else {
    const n = 12;
    total = P * Math.pow(1 + r / n, n * t);
  }

  const earned = total - P;

  return {
    values: [
      {
        key: "total",
        label: "Toplam Tutar",
        value: formatCurrency(Math.round(total)) + " ₺",
      },
      {
        key: "interest",
        label: "Faiz Kazancı",
        value: formatCurrency(Math.round(earned)) + " ₺",
      },
    ],
    meta: {
      interestType,
    },
  };
}
