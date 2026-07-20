const zodiacSigns = [
  { sign: "Koç", start: [3, 21], end: [4, 20] },
  { sign: "Boğa", start: [4, 21], end: [5, 21] },
  { sign: "İkizler", start: [5, 22], end: [6, 22] },
  { sign: "Yengeç", start: [6, 23], end: [7, 22] },
  { sign: "Aslan", start: [7, 23], end: [8, 22] },
  { sign: "Başak", start: [8, 23], end: [9, 22] },
  { sign: "Terazi", start: [9, 23], end: [10, 22] },
  { sign: "Akrep", start: [10, 23], end: [11, 21] },
  { sign: "Yay", start: [11, 22], end: [12, 21] },
  { sign: "Oğlak", start: [12, 22], end: [1, 20] },
  { sign: "Kova", start: [1, 21], end: [2, 19] },
  { sign: "Balık", start: [2, 20], end: [3, 20] },
];

export function calculateHoroscope({ day, month }) {
  for (const z of zodiacSigns) {
    const [sMonth, sDay] = z.start;
    const [eMonth, eDay] = z.end;

    if (
      (month === sMonth && day >= sDay) ||
      (month === eMonth && day <= eDay)
    ) {
      return {
        values: [
          {
            key: "burc",
            label: "Burcunuz",
            value: z.sign,
          },
        ],
      };
    }
  }

  return {
    values: [
      {
        key: "burc",
        label: "Burcunuz",
        value: "Bilinmiyor",
      },
    ],
  };
}
