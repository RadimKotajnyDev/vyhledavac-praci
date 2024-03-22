import {fonts} from './fonts';
import {Providers} from './providers/Providers';
import {Box} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode,
}) {
  return (
    <html lang='cs' className={fonts.rubik.variable}>
    <body>
    <Providers>
      <Box height="100vh" bgGradient='linear(to-r, #360033, #0b8793)'>
        <Navbar/>
        <Box as="main">{children}</Box>
        <Footer/>
      </Box>
    </Providers>
    </body>
    </html>
  );
}
