export function calculateGun({ start, end, amount, type, includeStart }) {
  const DAY_MS = 1000 * 60 * 60 * 24;

  // BETWEEN
  if (type === "between") {
    if (!start || !end) {
      return {
        values: [
          {
            key: "error",
            value: "Tarihleri giriniz",
          },
        ],
      };
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    // Saat farkı buglarını önle
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    // Negatif kontrol
    if (endDate < startDate) {
      return {
        values: [
          {
            key: "error",
            value: "Bitiş tarihi başlangıçtan küçük olamaz",
          },
        ],
      };
    }

    let diff = Math.round((endDate.getTime() - startDate.getTime()) / DAY_MS);

    if (includeStart) {
      diff += 1;
    }

    const weeks = Math.floor(diff / 7);
    const remainingDays = diff % 7;

    return {
      values: [
        {
          key: "days",
          label: "Toplam Gün",
          value: `${diff} gün`,
        },
        {
          key: "weeks",
          label: "Hafta Karşılığı",
          value: `${weeks} hafta ${remainingDays} gün`,
        },
      ],
    };
  }

  // ADD / SUBTRACT
  if (type === "add" || type === "subtract") {
    if (!start || !amount) {
      return {
        values: [
          {
            key: "error",
            value: "Eksik bilgi girdiniz",
          },
        ],
      };
    }

    const date = new Date(start);

    date.setHours(0, 0, 0, 0);

    const gun = Number(amount);

    if (isNaN(gun)) {
      return {
        values: [
          {
            key: "error",
            value: "Geçerli bir gün sayısı giriniz",
          },
        ],
      };
    }

    if (type === "add") {
      date.setDate(date.getDate() + gun);
    }

    if (type === "subtract") {
      date.setDate(date.getDate() - gun);
    }

    return {
      values: [
        {
          key: "result",
          label: "Sonuç Tarihi",
          value: date.toLocaleDateString("tr-TR"),
        },
      ],
    };
  }

  return {
    values: [
      {
        key: "error",
        value: "Geçersiz işlem tipi",
      },
    ],
  };
}
