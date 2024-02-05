/* theme.ts */
import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
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