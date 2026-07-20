import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import shape from "./shape";
import spacing from "./spacing";
import button from "./button";

export const getTheme = () =>
  createTheme({
    palette,
    typography,
    shape,
    spacing,
    components: {
      ...button,
    },
  });
