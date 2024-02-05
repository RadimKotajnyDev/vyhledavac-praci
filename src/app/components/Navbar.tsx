import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  Spacer,
  Stack,
  StackItem,
  Text
} from "@chakra-ui/react";
import {SlMagnifier} from "react-icons/sl";

export const Navbar = () => {
  return (
    <Box as="nav" mx={5} pt={2} color="white">
      <Flex //bg="lightgray"
        //opacity={90}
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        borderRadius="full"
        dropShadow="2xl"
        alignItems="center" px={10}
        py={5}
      >
        <Box display="flex" justifyItems="center" alignItems="center" gap={2}>
          <SlMagnifier />
          <Text>ThesisSpotlight</Text>
        </Box>
        <Spacer/>
        <Box w="100%">
          <AbsoluteCenter>
            <Box //bg="darkgray"
              bg='blackAlpha.300'
              backdropFilter='blur(10px)'
              borderRadius="full"
              dropShadow="2xl"
            >
              <Stack display="flex" flexDir="row" gap={10}>
                <StackItem px={10} py={5}
                           _hover={{
                             dropShadow: "xl",
                             background: "white",
                             color: "black",
                             cursor: "pointer"
                           }} borderRadius="full">Button1</StackItem>
                <StackItem px={10} py={5} _hover={{
                  background: "white",
                  color: "black",
                  cursor: "pointer"
                }} borderRadius="full">Button2</StackItem>
                <StackItem px={10} py={5} _hover={{
                  background: "white",
                  color: "black",
                  cursor: "pointer"
                }} borderRadius="full">Button3</StackItem>
              </Stack>
            </Box>
          </AbsoluteCenter>
        </Box>
        <Spacer/>
        <Box>
          
        </Box>
      </Flex>
    </Box>
  )
}