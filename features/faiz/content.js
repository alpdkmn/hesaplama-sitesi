export const faizContent = {
  title: "Faiz Hesaplama (Basit ve Bileşik Faiz)",

  description:
    "Basit faiz ve bileşik faiz hesaplama işlemlerini hızlıca yapın. Anapara, faiz oranı ve vade bilgileriyle toplam kazancı hesaplayın.",

  shortDescription:
    "Basit veya bileşik faiz türünü seçerek faiz tutarını ve toplam geri dönüşü kolayca hesaplayabilirsiniz.",

  formula: {
    simple: "Basit Faiz = Anapara × Faiz Oranı × Vade",

    compound: "Bileşik Faiz = Anapara × (1 + Faiz Oranı)^Vade",
  },

  formulaDescription:
    "Basit faiz hesaplamasında faiz yalnızca anapara üzerinden hesaplanır. Bileşik faizde ise her dönem oluşan faiz ana paraya eklenerek yeniden faiz hesaplanır.",

  sections: [
    {
      title: "Faiz Nedir?",
      content:
        "Faiz, borç verilen veya yatırım yapılan paranın belirli bir süre sonunda sağladığı kazanç ya da maliyettir. Bankacılık, kredi ve yatırım işlemlerinde yaygın olarak kullanılır.",
    },

    {
      title: "Basit Faiz Nasıl Hesaplanır?",
      content:
        "Basit faiz hesaplamasında yalnızca başlangıçtaki anapara üzerinden faiz uygulanır. Vade boyunca oluşan faiz miktarı değişmez.",
    },

    {
      title: "Bileşik Faiz Nasıl Hesaplanır?",
      content:
        "Bileşik faizde her dönem oluşan faiz anaparaya eklenir ve sonraki dönem faiz hesaplaması bu yeni tutar üzerinden yapılır. Bu nedenle uzun vadede getirisi daha yüksek olabilir.",
    },

    {
      title: "Faiz Hesaplamasında Nelere Dikkat Edilmelidir?",
      content:
        "Faiz oranı, vade süresi ve faiz türü toplam kazanç üzerinde doğrudan etkilidir. Özellikle bileşik faiz uzun vadeli yatırımlarda büyük fark oluşturabilir.",
    },
  ],

  faq: [
    {
      question: "Basit faiz nasıl hesaplanır?",
      answer:
        "Basit faiz; anapara, faiz oranı ve vade süresi çarpılarak hesaplanır.",
    },

    {
      question: "Bileşik faiz nedir?",
      answer:
        "Bileşik faiz, oluşan faizin anaparaya eklenerek yeniden faiz uygulanması yöntemidir.",
    },

    {
      question: "Basit faiz ile bileşik faiz arasındaki fark nedir?",
      answer:
        "Basit faizde faiz yalnızca anaparaya uygulanırken, bileşik faizde faiz getirileri de faiz kazanmaya devam eder.",
    },

    {
      question: "Faiz oranı arttıkça kazanç artar mı?",
      answer:
        "Evet. Aynı anapara ve vadede daha yüksek faiz oranı daha yüksek getiri sağlar.",
    },
  ],
};
