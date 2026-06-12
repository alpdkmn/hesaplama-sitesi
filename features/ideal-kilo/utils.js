export function calculateIdealWeight({ gender, height, weight }) {
  const heightValue = Number(height);
  const heightInch = heightValue / 2.54;

  let idealWeight = 0;

  if (gender === "female") {
    idealWeight = 45.5 + 2.3 * (heightInch - 60);
  } else {
    idealWeight = 50 + 2.3 * (heightInch - 60);
  }

  const difference = weight - idealWeight;

  return {
    values: [
      {
        key: "idealWeight",
        label: "İdeal Kilo",
        value: `${idealWeight.toFixed(1)} kg`,
      },
      {
        key: "weightDifference",
        label:
          difference >= 0
            ? "İdeal kilonuzun üzerindesiniz"
            : "İdeal kilonuzun altındasınız",
        value: `${Math.abs(difference).toFixed(1)} kg`,
      },
    ],
  };
}
