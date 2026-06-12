import path from "node:path";
import { title } from "node:process";

export const navigation = [
  { title: "Finans", slug: "finans" },
  { title: "Eğitim", slug: "egitim" },
  { title: "Sağlık", slug: "saglik" },
  { title: "Matematik", slug: "matematik" },
  { title: "Zaman", slug: "zaman" },
];
export const categories = [
  {
    title: "Finans",
    items: [
      { title: "KDV Hesaplama", path: "/finans/kdv-hesaplama" },
      { title: "Faiz Hesaplama", path: "/finans/faiz-hesaplama" },
      {
        title: "Kredi Kartı Asgari Ödeme Hesaplama",
        path: "/finans/kredi-karti-asgari-odeme-hesaplama",
      },
    ],
  },
  {
    title: "Eğitim",
    items: [
      {
        title: "Vize-Final Ortalama Hesaplama",
        path: "/egitim/vize-final-hesaplama",
      },
      {
        title: "Finalden Kaç Almalıyım",
        path: "/egitim/finalden-kac-almaliyim-hesaplama",
      },
    ],
  },
  {
    title: "Sağlık",
    items: [
      {
        title: "Kalori İhtiyacı Hesaplama",
        path: "/saglik/kalori-ihtiyaci-hesaplama",
      },
      {
        title: "İdeal Kilo Hesaplama",
        path: "/saglik/ideal-kilo-hesaplama",
      },
      {
        title: "Bebek Kilo Hesaplama",
        path: "/saglik/bebek-kilo-hesaplama",
      },
    ],
  },
  {
    title: "Matematik",
    items: [
      {
        title: "Yüzde Hesaplama",
        path: "/matematik/yuzde-hesaplama",
      },
      {
        title: "Kar Hesaplama",
        path: "/matematik/kar-hesaplama",
      },
    ],
  },
  {
    title: "Zaman",
    items: [
      { title: "Gün Hesaplama", path: "/zaman/gun-hesaplama" },
      {
        title: "Burç Hesaplama",
        path: "/zaman/burc-hesaplama",
      },
    ],
  },
];
