import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import shape from "./shape";
import spacing from "./spacing";
import button from "./button";
import { getEffects } from "./effects";
const effects = getEffects(palette);

export const getTheme = () =>
  createTheme({
    palette,
    typography,
    shape,
    spacing,
    effects,
    components: {
      ...button,
    },
  });
