import {Box, Text} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as="footer"
         bg='blackAlpha.300'
         backdropFilter='blur(10px)'
         borderTopRadius="xl"
         dropShadow="2xl"
         color="white"
         minH="10vh"
         p={1}
    >
      <Text>&copy; {new Date().getFullYear()} Radim Kotajny & Filip Kroupa</Text>
    </Box>
  )
}