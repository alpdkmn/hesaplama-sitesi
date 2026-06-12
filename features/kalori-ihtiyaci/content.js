export const kaloriIhtiyaciContent = {
  title: "Günlük Kalori İhtiyacı Hesaplama",

  description:
    "Yaş, boy, kilo ve aktivite seviyenize göre günlük kalori ihtiyacınızı hesaplayın. Kilo verme, alma veya koruma hedefinize uygun değerleri öğrenin.",

  shortDescription:
    "Günlük kalori ihtiyacınızı hesaplayarak kilo verme, alma veya koruma hedefinizi belirleyebilirsiniz.",

  formula: {
    bmrMale: "BMR (Erkek) = 10 × kilo + 6.25 × boy - 5 × yaş + 5",

    bmrFemale: "BMR (Kadın) = 10 × kilo + 6.25 × boy - 5 × yaş - 161",

    tdee: "Günlük Kalori = BMR × Aktivite Katsayısı",
  },

  formulaDescription:
    "Kalori ihtiyacı hesaplamasında önce bazal metabolizma hızı (BMR) bulunur, ardından aktivite seviyesine göre günlük toplam enerji ihtiyacı (TDEE) hesaplanır.",

  sections: [
    {
      title: "Kalori İhtiyacı Nedir?",
      content:
        "Kalori ihtiyacı, vücudun günlük yaşamını sürdürebilmesi için ihtiyaç duyduğu enerji miktarıdır.",
    },

    {
      title: "BMR (Bazal Metabolizma) Nedir?",
      content:
        "BMR, vücudun tamamen dinlenme halindeyken harcadığı minimum enerji miktarını ifade eder.",
    },

    {
      title: "Aktivite Seviyesi Neden Önemlidir?",
      content:
        "Günlük hareket düzeyi arttıkça vücudun ihtiyaç duyduğu kalori miktarı da artar. Bu nedenle hesaplamada aktivite katsayısı kullanılır.",
    },

    {
      title: "Kalori Hesaplama Ne İşe Yarar?",
      content:
        "Kalori hesaplama, kilo verme, kilo alma veya mevcut kiloyu koruma hedeflerini planlamak için kullanılır.",
    },
  ],

  faq: [
    {
      question: "Günlük kalori ihtiyacı nasıl hesaplanır?",
      answer:
        "Önce BMR hesaplanır, ardından aktivite seviyesine göre çarpılarak günlük kalori ihtiyacı bulunur.",
    },

    {
      question: "Kilo vermek için kaç kalori almalıyım?",
      answer:
        "Genellikle günlük ihtiyacın altında kalori almak kilo vermeye yardımcı olur.",
    },

    {
      question: "BMR nedir?",
      answer:
        "BMR, vücudun dinlenme halinde harcadığı minimum enerji miktarıdır.",
    },

    {
      question: "Aktivite katsayısı nedir?",
      answer: "Günlük hareket seviyesine göre BMR’nin çarpıldığı değerdir.",
    },
  ],
};
