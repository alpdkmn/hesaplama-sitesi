import { formatCurrency } from "@/lib/format";
import { parseNumber } from "@/lib/number";

export function calculateMinimumPayment({ debt, limit }) {
  // 🔒 Boş kontrol
  if (debt === "" || limit === "") {
    return {
      values: [
        {
          key: "error",
          value: "Lütfen tüm alanları doldurun",
        },
      ],
    };
  }

  const debtNum = parseNumber(debt);
  const limitNum = parseNumber(limit);
  // 🔒 Geçersiz değer kontrolü
  if (isNaN(debtNum) || isNaN(limitNum) || debtNum <= 0 || limitNum <= 0) {
    return {
      values: [
        {
          key: "error",
          value: "Geçerli pozitif sayılar girin",
        },
      ],
    };
  }

  // 📊 Oran belirleme (basitleştirilmiş model)
  let rate;
  if (limitNum > 50000) {
    rate = 40;
  } else {
    rate = 20;
  }

  const minimumPayment = debtNum * (rate / 100);
  const remainingDebt = debtNum - minimumPayment;

  return {
    values: [
      {
        key: "minimum",
        label: "Asgari ödeme tutarı",
        value: formatCurrency(minimumPayment) + " ₺",
      },
      {
        key: "remaining",
        label: "Kalan borç",
        value: formatCurrency(remainingDebt) + " ₺",
      },
      {
        key: "rate",
        label: "Uygulanan oran",
        value: "%" + rate,
      },
    ],
  };
}
