import palette from "./palette";
import shape from "./shape";
import spacing from "./spacing";
import typography from "./typography";
import button from "./button";
import effects from "./effects";

const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette,
  typography,
  shape,
  spacing,
  effects,
  components: {
    ...button,
  },
});

export default theme;
