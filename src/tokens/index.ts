import { palette } from "./palette";

export const tokens = {
  color: {
    text: {
      button: {
        borderless: palette.primary,
        outlinedSecondary: palette.primary,
        outlinedAuxiliary: palette.primary,
        default: palette.white,
      },
    },
    border: {
      button: {
        borderless: palette.transparent,
        outlinedSecondary: palette.primary,
        outlinedAuxiliary: palette.gray30,
        default: palette.primary,
      },
    },
    background: {
      button: {
        borderless: palette.transparent,
        outlinedSecondary: palette.white,
        outlinedAuxiliary: palette.white,
        default: palette.primary,
      },
    },
  },
  height: {
    button: {
      medium: "27px",
      large: "34px",
    },
  },
  width: {
    border: {
      button: {
        medium: "1px",
        large: "1px",
      },
    },
  },
  style: {
    border: {
      button: {
        borderless: "none",
        default: "solid",
      },
    },
  },
  font: {
    family: {
      base: "Roboto, Helvetica Neue, Arial, sans-serif",
    },
  },
};
