export function calculatePercentage({ type, a, b }) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) return { values: [] };

  let resultValue = 0;
  let suffix = "";

  switch (type) {
    case "percentOf":
      resultValue = (a * b) / 100;
      break;

    case "whatPercent":
      resultValue = (a / b) * 100;
      suffix = "%";
      break;

    case "changeRate":
      resultValue = ((b - a) / a) * 100;
      suffix = "%";
      break;

    case "increase":
      resultValue = a + (a * b) / 100;
      break;

    case "decrease":
      resultValue = a - (a * b) / 100;
      break;

    default:
      return { values: [] };
  }

  return {
    values: [
      {
        key: "result",
        label: "",
        value: resultValue.toFixed(2) + (suffix ? " " + suffix : ""),
      },
    ],
  };
}
