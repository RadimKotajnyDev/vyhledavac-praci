// app/Providers.tsx
'use client'

import {Box, ChakraProvider} from '@chakra-ui/react'
import {theme} from "@/app/theme";
import {Navbar} from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";
import {APIDataProvider} from "@/app/providers/APIdataProvider";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <APIDataProvider>
        <Box minHeight="100vh"
          //bgGradient='linear(to-r, teal.200, blue.500)'
             bgGradient='linear(to-r, #360033, #0b8793)'
             w="full">
          <Navbar/>
          <Box as="main">
            {children}
          </Box>
          {/*
          <Footer />
         */}
        </Box>
      </APIDataProvider>
    </ChakraProvider>
  )
}