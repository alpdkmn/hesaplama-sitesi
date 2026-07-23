import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function FAQ({ items }) {
  if (!items) return null;

  // Google'ın SSS'leri anlaması için yapısal veri (JSON-LD).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Box
      sx={{ mt: 4, backgroundColor: "transparent" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2, ml: 1 }}>
        Sık Sorulan Sorular
      </Typography>

      {items.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          sx={{
            // MUI'nin açılınca soluklaşan ayraç çizgisini kapat;
            // yerine hiç solmayan sabit bir üst kenarlık kullan.
            "&::before": { display: "none" },
            borderTop: "1px solid",
            borderColor: "divider",
            "&:first-of-type": { borderTop: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{item.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;
