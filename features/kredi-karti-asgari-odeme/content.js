export const krediKartiAsgariOdemesiContent = {
  title: "Kredi Kartı Asgari Ödeme Hesaplama",

  description:
    "Kredi kartı borcunuzun asgari ödeme tutarını ve kalan borcunuzu hesaplayın. Aylık ödeme planınızı kolayca görün.",

  shortDescription:
    "Kredi kartı borcunuzun asgari ödeme tutarını ve kalan borç miktarını hızlıca hesaplayabilirsiniz.",

  formula: {
    minimumPayment: "Asgari Ödeme = Dönem Borcu × Asgari Ödeme Oranı",

    remainingDebt: "Kalan Borç = Dönem Borcu - Asgari Ödeme",
  },

  formulaDescription:
    "Kredi kartı asgari ödeme tutarı, bankanın belirlediği oran üzerinden hesaplanır. Ödenmeyen kısım borç olarak devreder ve faiz işlemeye devam edebilir.",

  sections: [
    {
      title: "Kredi Kartı Asgari Ödeme Nedir?",
      content:
        "Asgari ödeme, kredi kartı borcunun ödenmesi zorunlu olan minimum kısmıdır. Bu tutar ödenmediğinde gecikme faizi uygulanabilir.",
    },

    {
      title: "Asgari Ödeme Nasıl Hesaplanır?",
      content:
        "Asgari ödeme, toplam dönem borcunun banka tarafından belirlenen yüzdesi alınarak hesaplanır.",
    },

    {
      title: "Asgari Ödeme Yapılmazsa Ne Olur?",
      content:
        "Asgari ödeme yapılmadığında borç gecikmeye girer, faiz işler ve kredi notu olumsuz etkilenebilir.",
    },

    {
      title: "Kredi Kartı Borcu Nasıl Azaltılır?",
      content:
        "Borcu azaltmak için mümkün olduğunca asgariden fazla ödeme yapılması önerilir. Böylece toplam faiz yükü düşer.",
    },
  ],

  faq: [
    {
      question: "Asgari ödeme nedir?",
      answer: "Kredi kartı borcunun ödenmesi gereken minimum tutarıdır.",
    },

    {
      question: "Asgari ödeme yapılmazsa ne olur?",
      answer: "Gecikme faizi işler ve kredi notu olumsuz etkilenebilir.",
    },

    {
      question: "Sadece asgari ödeme yapmak doğru mu?",
      answer: "Uzun vadede faiz yükünü artırabileceği için önerilmez.",
    },

    {
      question: "Asgari ödeme oranı neye göre belirlenir?",
      answer:
        "Bankalar tarafından kart limiti ve borç durumuna göre belirlenir.",
    },
  ],
};
