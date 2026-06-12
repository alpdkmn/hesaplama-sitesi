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

  return (
    <Box
      sx={{ mt: 4, mx: "auto", maxWidth: 700, backgroundColor: "transparent" }}
    >
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2, ml: 1 }}>
        Sık Sorulan Sorular
      </Typography>

      {items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{item.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;
