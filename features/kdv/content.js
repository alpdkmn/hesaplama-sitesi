export const kdvContent = {
  title: "KDV Hesaplama (KDV Dahil / Hariç Hesapla)",
  description:
    "KDV dahil ve hariç tutar hesaplama işlemlerini hızlı ve kolay şekilde yapın. %1, %10 ve %20 KDV oranlarıyla anında sonuç alın.",
  shortDescription:
    "KDV dahil veya hariç fiyat hesaplamalarını kolayca yapabilir, KDV tutarını anında öğrenebilirsiniz.",
  formula: {
    included: "KDV Dahil Tutar = Net Tutar × (1 + KDV Oranı / 100)",

    excluded: "Net Tutar = KDV Dahil Tutar / (1 + KDV Oranı / 100)",
  },
  formulaDescription:
    "KDV hesaplamasında ürün veya hizmet bedeline belirlenen vergi oranı eklenir. Türkiye’de yaygın olarak %1, %10 ve %20 KDV oranları kullanılır.",
  sections: [
    {
      title: "KDV Nedir?",
      content:
        "Katma Değer Vergisi (KDV), ürün ve hizmet satışlarında uygulanan dolaylı bir vergi türüdür. Türkiye’de birçok ürün ve hizmet için farklı oranlarda KDV uygulanmaktadır.",
    },

    {
      title: "KDV Nasıl Hesaplanır?",
      content:
        "KDV hesaplamak için ürünün net fiyatı üzerine belirlenen KDV oranı eklenir. Örneğin 1000 TL tutarındaki bir ürün için %20 KDV hesaplandığında toplam fiyat 1200 TL olur.",
    },
    {
      title: "Türkiye’de Kullanılan KDV Oranları",
      content:
        "Türkiye’de genel KDV oranı %20’dir. Bazı temel ihtiyaç ürünlerinde %1 ve %10 gibi farklı oranlar uygulanabilmektedir.",
    },
  ],

  faq: [
    {
      question: "KDV nasıl hesaplanır?",
      answer:
        "KDV hesaplamak için net tutar, KDV oranı kadar artırılır. Örneğin %20 KDV için net tutar 1.20 ile çarpılır.",
    },

    {
      question: "%20 KDV nasıl eklenir?",
      answer:
        "Net tutarı 1.20 ile çarparak %20 KDV dahil fiyatı bulabilirsiniz.",
    },

    {
      question: "KDV dahil fiyat nasıl hesaplanır?",
      answer:
        "Net fiyat üzerine KDV oranı eklenerek KDV dahil fiyat hesaplanır.",
    },

    {
      question: "KDV hariç tutar nasıl bulunur?",
      answer:
        "KDV dahil tutar, ilgili KDV katsayısına bölünerek net tutar elde edilir.",
    },
  ],
};
