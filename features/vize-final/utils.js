export function calculateVizeFinal({ vize, vizeOrani, final, finalOrani }) {
  const vizePayi = vize * (vizeOrani / 100);
  const finalPayi = final * (finalOrani / 100);
  const ortalama = vizePayi + finalPayi;

  return {
    values: [
      {
        key: "vize",
        label: "Vize Payı",
        value: vizePayi.toFixed(2),
      },
      {
        key: "final",
        label: "Final Payı",
        value: finalPayi.toFixed(2),
      },
      {
        key: "ortalama",
        label: "Ortalama Not",
        value: ortalama.toFixed(2),
      },
    ],
  };
}
