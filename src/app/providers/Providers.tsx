// app/Providers.tsx
'use client'

import {Box, Text, ChakraProvider} from '@chakra-ui/react'
import {theme} from "@/app/theme";
import Navbar from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Box //minHeight="100vh"
        //bgGradient='linear(to-r, teal.200, blue.500)'
           bgGradient='linear(to-r, #360033, #0b8793)'
           w="full">
        <Navbar/>
        <Box as="main" minH="100vh">
          {children}
        </Box>
      </Box>
      {/* <Footer/> */}
    </ChakraProvider>
  )
}