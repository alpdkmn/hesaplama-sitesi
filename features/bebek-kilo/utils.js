// ==========================
// MAIN ENTRY
// ==========================
export function calculateBabyWeight(formData) {
  const { mode } = formData;

  if (mode === "pregnancy") {
    return calculatePregnancy(formData);
  }

  if (mode === "postbirth") {
    return calculatePostBirth(formData);
  }

  return {
    values: [
      {
        key: "error",
        label: "Hata",
        value: "Geçersiz hesaplama modu",
      },
    ],
  };
}

// ==========================
// PREGNANCY MODE
// ==========================
function calculatePregnancy(formData) {
  const week = Number(formData.week);
  const gender = formData.gender;

  if (isNaN(week)) {
    return {
      values: [
        {
          key: "error",
          label: "Hata",
          value: "Gebelik haftası geçerli değil",
        },
      ],
    };
  }

  let baseWeight;

  if (week <= 12) baseWeight = 14;
  else if (week <= 16) baseWeight = 100;
  else if (week <= 20) baseWeight = 300;
  else if (week <= 24) baseWeight = 600;
  else if (week <= 28) baseWeight = 1000;
  else if (week <= 32) baseWeight = 1800;
  else if (week <= 36) baseWeight = 2500;
  else baseWeight = 3200;

  const genderFactor = gender === "male" ? 1.03 : 1;
  const estimated = Math.round(baseWeight * genderFactor);

  const trimester = getPregnancyStatus(week);

  return {
    values: [
      {
        key: "weight",
        label: "Tahmini Bebek Ağırlığı",
        value: `${estimated} gram`,
      },
      {
        key: "week",
        label: "Gebelik Haftası",
        value: `${week}. hafta`,
      },
      {
        key: "trimester",
        label: "Dönem",
        value: trimester,
      },
      {
        key: "gender",
        label: "Cinsiyet",
        value: gender === "male" ? "Erkek" : "Kız",
      },
    ],
  };
}

// ==========================
// POST BIRTH MODE
// ==========================
function calculatePostBirth(formData) {
  const month = Number(formData.month);
  const weight = Number(formData.weight);

  if (isNaN(month) || isNaN(weight)) {
    return {
      values: [
        {
          key: "error",
          label: "Hata",
          value: "Ay veya kilo geçerli değil",
        },
      ],
    };
  }

  const average = getAverageBabyWeightByMonth(month);
  const diff = weight - average;

  let status = "normal";
  if (diff > 1) status = "ortalamanın üstü";
  else if (diff < -1) status = "ortalamanın altı";

  return {
    values: [
      {
        key: "weight",
        label: "Bebek Kilosu",
        value: `${weight} kg`,
      },
      {
        key: "average",
        label: "Aylık Ortalama",
        value: `${average} kg`,
      },
      {
        key: "difference",
        label: "Fark",
        value: `${diff.toFixed(1)} kg`,
      },
      {
        key: "status",
        label: "Durum",
        value: status,
      },
      {
        key: "month",
        label: "Ay",
        value: `${month}. ay`,
      },
    ],
  };
}

// ==========================
// HELPERS
// ==========================
function getAverageBabyWeightByMonth(month) {
  const map = {
    1: 4.5,
    2: 5.5,
    3: 6.4,
    4: 7.0,
    5: 7.5,
    6: 7.9,
    7: 8.3,
    8: 8.6,
    9: 8.9,
    10: 9.1,
    11: 9.3,
    12: 9.5,
  };

  return map[month] ?? 8;
}

function getPregnancyStatus(week) {
  if (week <= 12) return "İlk trimester";
  if (week <= 28) return "İkinci trimester";
  return "Üçüncü trimester";
}
