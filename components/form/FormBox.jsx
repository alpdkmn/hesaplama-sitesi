import { Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FormBox({ children, onSubmit }) {
  const theme = useTheme();
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      sx={{ width: "100%" }}
    >
      {children}
    </Box>
  );
}

export default FormBox;
