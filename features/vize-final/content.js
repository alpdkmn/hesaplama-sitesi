export const vizeFinalContent = {
  title: "Vize Final Notu Hesaplama",

  description:
    "Vize ve final notlarınıza göre dönem sonu ortalamanızı hesaplayın. Geçmek için finalden kaç almanız gerektiğini öğrenin.",

  shortDescription:
    "Vize ve final notlarını girerek ortalamanızı ve dersten geçmek için gereken final notunu hesaplayabilirsiniz.",

  formula: {
    average:
      "Dönem Ortalaması = (Vize × Vize Ağırlığı) + (Final × Final Ağırlığı)",

    requiredFinal:
      "Gerekli Final = (Hedef Ortalama - (Vize × Vize Ağırlığı)) / Final Ağırlığı",
  },

  formulaDescription:
    "Vize final hesaplamasında sınavların ağırlıkları kullanılır. Genellikle vize %40, final %60 etkili olur ancak bu oranlar derslere göre değişebilir.",

  sections: [
    {
      title: "Vize Final Notu Nedir?",
      content:
        "Vize final notu, bir dersin dönem içi ve dönem sonu sınavlarının birlikte değerlendirilmesiyle oluşan ortalama nottur.",
    },

    {
      title: "Vize ve Final Ağırlıkları",
      content:
        "Çoğu üniversitede vize %40, final %60 etkili olur. Ancak bazı derslerde bu oran farklılık gösterebilir.",
    },

    {
      title: "Dersten Geçmek İçin Kaç Almalıyım?",
      content:
        "Mevcut vize notuna göre finalden alınması gereken minimum not hesaplanarak dersten geçme durumu analiz edilebilir.",
    },

    {
      title: "Ortalama Hesaplama Neden Önemlidir?",
      content:
        "Dönem sonu başarısını önceden görmek ve çalışma planını buna göre yapmak için önemlidir.",
    },
  ],

  faq: [
    {
      question: "Vize final ortalaması nasıl hesaplanır?",
      answer:
        "Vize ve final notları kendi ağırlıkları ile çarpılarak toplam ortalama bulunur.",
    },

    {
      question: "Vize %40 final %60 mı?",
      answer: "Genellikle evet, ancak ders ve üniversiteye göre değişebilir.",
    },

    {
      question: "Dersten geçmek için final kaç olmalı?",
      answer:
        "Bu, vize notuna ve hedef ortalamaya göre değişir ve hesaplama ile bulunabilir.",
    },

    {
      question: "Final düşük olursa ne olur?",
      answer:
        "Final notu düşük olursa genel ortalama düşebilir ve dersten kalma riski oluşabilir.",
    },
  ],
};
