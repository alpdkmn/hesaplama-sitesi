import { darken } from "@mui/material";

const button = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        fontSize: "1rem",
        borderRadius: "14px",
        padding: "10px 22px",
        textTransform: "none",
        boxShadow: "none",
        transition: "all 0.2s ease",
      },
    },
  },
};

export default button;
