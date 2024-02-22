/* theme.ts */
import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
   colors: {
    grayAlpha: {
      50: "rgba(37, 37, 37, 0.05)",
      100: "rgba(37, 37, 37, 0.1)",
      200: "rgba(37, 37, 37, 0.2)",
      300: "rgba(37, 37, 37, 0.3)",
      400: "rgba(37, 37, 37, 0.4)",
      500: "rgba(37, 37, 37, 0.5)",
      600: "rgba(37, 37, 37, 0.6)",
      700: "rgba(37, 37, 37, 0.7)",
      800: "rgba(37, 37, 37, 0.8)",
      900: "rgba(37, 37, 37, 0.9)",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      th: "color: white",
      body: {
        height: '100%',
        margin: 0,
        //display: 'flex',
        //color: 'white',
        //bg: 'linear-gradient(to bottom right, #0F2027, #203A43, #2C5364)',
        overflow: 'hidden',
      },
    },
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  }
});