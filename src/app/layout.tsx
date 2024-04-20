import {fonts} from './fonts';
import {Providers} from './providers/Providers';
import {Box} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ThesisSpotlight (Beta)',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode,
}) {
  return (
    <html lang='cs' className={fonts.rubik.variable}>

    <body style={{overflow: "auto"}}>
    <Providers>
      <Box
        overflow="auto"
        height="100vh"
        bgGradient='linear(to-r, #360033, #0b8793)'
        //bg="rgb(54, 89, 129)"
      >
        <Navbar/>
        <Box as="main">{children}</Box>
        <Footer/>
      </Box>
    </Providers>
    </body>
    </html>
  );
}
