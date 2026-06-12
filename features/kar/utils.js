export function calculateProfit({
  purchasePrice,
  salePrice,
  profitPercent,
  mode,
}) {
  purchasePrice = parseFloat(purchasePrice);

  salePrice = parseFloat(salePrice);

  profitPercent = parseFloat(profitPercent);

  let result = 0;

  switch (mode) {
    // Kar oranı hesaplama
    case "profitRate":
      result = ((salePrice - purchasePrice) / purchasePrice) * 100;

      return {
        values: [
          {
            key: "profitRate",
            label: "Kar Oranı",
            value: `%${result.toFixed(2)}`,
          },
        ],
      };

    // Satış fiyatı hesaplama
    case "salePrice":
      result = purchasePrice * (1 + profitPercent / 100);

      return {
        values: [
          {
            key: "salePrice",
            label: "Satış Fiyatı",
            value: `${result.toFixed(2)} ₺`,
          },
        ],
      };

    // Alış fiyatı hesaplama
    case "buyPrice":
      result = salePrice / (1 + profitPercent / 100);

      return {
        values: [
          {
            key: "buyPrice",
            label: "Alış Fiyatı",
            value: `${result.toFixed(2)} ₺`,
          },
        ],
      };

    default:
      return {
        values: [],
      };
  }
}
