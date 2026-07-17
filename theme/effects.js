// effects.js
export const getEffects = (palette) => ({
  surface: `
    radial-gradient(
      circle at top left,
      rgba(18, 61, 110, 0.25),
      transparent 42%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(18, 61, 110, 0.15),
      transparent 42%
    ),

    linear-gradient(
      180deg,
      rgba(18, 61, 110, 0.10),
      ${palette.background.default}
    )
  `,
});
