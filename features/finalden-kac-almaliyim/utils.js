export function calculateFinalRequired({
  vize,
  vizeOrani,
  finalOrani,
  gecmeNotu,
}) {
  // 🔒 Boş kontrol
  if (
    vize === "" ||
    vizeOrani === "" ||
    finalOrani === "" ||
    gecmeNotu === ""
  ) {
    return {
      values: [{ key: "error", value: "Lütfen tüm alanları doldurun." }],
    };
  }

  // 🔢 Number dönüşümleri
  vize = Number(vize);
  vizeOrani = Number(vizeOrani);
  finalOrani = Number(finalOrani);
  gecmeNotu = Number(gecmeNotu);

  // ❌ NaN kontrolü
  if (
    isNaN(vize) ||
    isNaN(vizeOrani) ||
    isNaN(finalOrani) ||
    isNaN(gecmeNotu)
  ) {
    return {
      values: [{ key: "error", value: "Geçerli sayılar girin." }],
    };
  }

  // 📊 Aralık kontrolü
  if (
    vize < 0 ||
    vize > 100 ||
    gecmeNotu < 0 ||
    gecmeNotu > 100 ||
    vizeOrani < 0 ||
    finalOrani < 0
  ) {
    return {
      values: [
        { key: "error", value: "Tüm değerler 0-100 arasında olmalıdır." },
      ],
    };
  }

  // ⚖️ Oran kontrolü
  if (vizeOrani + finalOrani !== 100) {
    return {
      values: [
        {
          key: "error",
          value: "Vize ve final oranlarının toplamı %100 olmalıdır.",
        },
      ],
    };
  }

  // 🎯 Normalize
  vizeOrani /= 100;
  finalOrani /= 100;

  if (finalOrani === 0) {
    return {
      values: [{ key: "error", value: "Final oranı 0 olamaz." }],
    };
  }

  const vizeKatkisi = vize * vizeOrani;
  const gerekliFinal = (gecmeNotu - vizeKatkisi) / finalOrani;

  // 🎯 DURUM + MESAJ
  let finalText = "";
  let mesaj = "";

  if (gerekliFinal > 100) {
    finalText = "Geçmek mümkün değil 😢";
    mesaj = "Matematik bile bırak dedi 😄";
  } else if (gerekliFinal <= 0) {
    finalText = "Zaten geçiyorsun 😎";
    mesaj = "Finale girsen de olur girmesen de 😄 (ama gir yine)";
  } else {
    finalText = gerekliFinal.toFixed(2);

    if (gerekliFinal <= 50) {
      mesaj = "Rahat geçersin 👍";
    } else if (gerekliFinal <= 70) {
      mesaj = "Biraz çalışmayla geçersin 🙂";
    } else if (gerekliFinal <= 90) {
      mesaj = "Riskli ⚠️ iyi çalışman lazım";
    } else {
      mesaj = "Çok zor 😬 ama imkansız değil";
    }
  }

  return {
    values: [
      {
        key: "final",
        label: "Gerekli Final Notu",
        value: finalText,
      },
      {
        key: "durum",
        label: "Durum",
        value: mesaj,
      },
      {
        key: "info",
        value: `Vize katkın: ${vizeKatkisi.toFixed(2)}`,
      },
    ],
  };
}
