import {Box, Text} from "@chakra-ui/react";

export const Footer = () => {

  function getTodayYear() {
    const todayYear = new Date().getFullYear()
    if(todayYear === 2024) {
      return todayYear
    }
    else return `2024 - ${todayYear}`
  }

  return (
    <Box as="footer"
         display="flex"
         bottom={0}
         position="absolute"
         //bg='blackAlpha.300'
         //backdropFilter='blur(10px)'
         //borderTopRadius="xl"
         dropShadow="2xl"
         color="white"
         w="full"
         justifyContent="center"
         alignItems="center"
         //h={300}
         //p={1}
    >
      <Text opacity="50%" fontSize="xs">&copy; {getTodayYear()} Radim Kotajny & Filip Kroupa</Text>
    </Box>
  )
}