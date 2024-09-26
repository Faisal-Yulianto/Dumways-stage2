import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeConfig: ThemeOverride = {
  colors: {
    brand: {
      green: "#04A51E",
      background: "#1D1D1D",
      "green-disabled": "#005E0E",
    },
  },
  styles: {
    global: {
      body: {
        color: "#FFFFFF",
      },
    },
  },
  fonts: {
    heading: `"Plus Jakarta Sans", sans-serif`,
    body: `"Plus Jakarta Sans", sans-serif`,
    mono: `"Plus Jakarta Sans", sans-serif`,
  },
};

export const theme = extendTheme(themeConfig satisfies ThemeOverride);
