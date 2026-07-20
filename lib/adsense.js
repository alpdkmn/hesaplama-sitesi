// Google AdSense yapılandırması.
// AdSense hesabınız ONAYLANDIKTAN sonra aşağıdaki değerleri doldurun.
// Bu kimlikler gizli değildir (sayfa kaynağında herkese görünürler).
//
// 1. ADSENSE_CLIENT: AdSense panelinizdeki yayıncı kimliği. Örn: "ca-pub-1234567890123456"
// 2. AD_SLOTS: AdSense'te "Reklamlar > Reklam birimine göre" bölümünden
//    oluşturduğunuz her reklam biriminin slot id'si (10 haneli sayı).

export const ADSENSE_CLIENT = "";

export const AD_SLOTS = {
  sidebar: "", // Masaüstü kenar reklamı (dikey / "display" birimi)
  mobile: "", // Mobil içi reklam (yatay / "display" birimi)
};

// Kimlik girilmişse reklamlar aktif olur; girilmemişse placeholder gösterilir.
export const ADSENSE_ENABLED = Boolean(ADSENSE_CLIENT);
