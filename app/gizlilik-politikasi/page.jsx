import { Box, Typography, Link as MuiLink } from "@mui/material";

export const metadata = {
  title: "Gizlilik Politikası",
  description:
    "Hesaplior.com gizlilik politikası: topladığımız veriler, çerezler ve üçüncü taraf reklam sağlayıcıları hakkında bilgi.",
};

function Section({ title, children }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default function GizlilikPolitikasiPage() {
  return (
    <Box sx={{ maxWidth: 760, mx: "auto", px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 } }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
        Gizlilik Politikası
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
        Son güncelleme: 20 Temmuz 2026
      </Typography>

      <Section title="Genel Bilgi">
        Bu gizlilik politikası, Hesaplior.com&apos;i ziyaret ettiğinizde
        hangi bilgilerin toplandığını ve nasıl kullanıldığını açıklar. Siteyi
        kullanarak bu politikayı kabul etmiş olursunuz.
      </Section>

      <Section title="Topladığımız Bilgiler">
        Hesaplama işlemleri tamamen tarayıcınızda gerçekleşir; girdiğiniz
        değerler (tutar, tarih, kilo vb.) sunucularımıza gönderilmez ve
        saklanmaz. Bununla birlikte, siteyi ziyaret ettiğinizde IP adresi,
        tarayıcı türü, ziyaret edilen sayfalar gibi bazı teknik bilgiler
        analiz ve reklam amacıyla üçüncü taraf hizmetler tarafından otomatik
        olarak toplanabilir.
      </Section>

      <Section title="Çerezler (Cookies)">
        Çerezler, tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitemiz ve
        iş birliği yaptığımız üçüncü taraflar; siteyi geliştirmek, kullanımı
        analiz etmek ve reklam göstermek için çerez kullanabilir. Tarayıcı
        ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz.
      </Section>

      <Section title="Google AdSense ve Üçüncü Taraf Reklamlar">
        Bu sitede Google AdSense üzerinden reklam gösterilebilir. Google gibi
        üçüncü taraf sağlayıcılar, geçmiş ziyaretlerinize göre reklam sunmak
        için çerez kullanır. Google&apos;ın reklam çerezi kullanımı,
        kullanıcılara sitemize ve internetteki diğer sitelere yaptıkları
        ziyaretlere dayalı reklamlar göstermesini sağlar. Kişiselleştirilmiş
        reklamları{" "}
        <MuiLink
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Reklam Ayarları
        </MuiLink>{" "}
        üzerinden kapatabilirsiniz. Üçüncü taraf satıcıların çerez kullanımı
        hakkında daha fazla bilgi için{" "}
        <MuiLink
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Reklam Politikaları
        </MuiLink>{" "}
        sayfasını inceleyebilirsiniz.
      </Section>

      <Section title="KVKK ve Haklarınız">
        6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında;
        kişisel verilerinize erişme, düzeltilmesini veya silinmesini isteme
        haklarına sahipsiniz. Bu haklarınızı kullanmak için aşağıdaki iletişim
        adresinden bize ulaşabilirsiniz.
      </Section>

      <Section title="Değişiklikler">
        Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu
        sayfada yayımlandığı anda yürürlüğe girer.
      </Section>

      <Section title="İletişim">
        Sorularınız için: [e-posta adresinizi buraya yazın]
      </Section>
    </Box>
  );
}
