import { formatCurrency } from "@/lib/format";
import { parseNumber } from "../../lib/number";

export function calculateKdv({ price, rate, isIncluding }) {
  const p = parseNumber(price);
  const r = parseNumber(rate) / 100;

  let total, kdv, net;

  if (isIncluding === "not including") {
    kdv = p * r;
    total = kdv + p;
    net = p;
  } else {
    net = p / (1 + r);
    kdv = p - net;
    total = p;
  }

  const format = (v) => formatCurrency(v) + "₺";

  return {
    values: [
      {
        key: "total",
        label: "Toplam tutar",
        value: format(total),
      },
      {
        key: "kdv",
        label: "KDV tutarı",
        value: format(kdv),
      },
      {
        key: "net",
        label: "Net tutar",
        value: format(net),
      },
    ],
    meta: [],
  };
}
