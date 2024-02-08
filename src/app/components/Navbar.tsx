import {Box, Divider, Flex, Spacer, Text} from "@chakra-ui/react";
import {SlMagnifier, SlQuestion, SlUser} from "react-icons/sl";

export const Navbar = () => {
  return (
    <Box as="nav" mx={5} pt={5} color="white">
      <Flex //bg="lightgray"
        //opacity={90}
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        borderRadius="full"
        dropShadow="2xl"
        alignItems="center"
      >
        <Box display="flex" justifyItems="center" alignItems="center" gap={2}
             bg='blackAlpha.300'
             backdropFilter='blur(10px)'
             borderRadius="full"
             dropShadow="2xl"
             px={10}
             py={5}
        >
          <SlMagnifier/>
          <Text>ThesisSpotlight
          </Text>
        </Box>
        <Spacer/>
        <Box w="100%">

        </Box>
        <Spacer/>
        <Box display="flex" justifyItems="center" alignItems="center"
             bg='blackAlpha.300'
             backdropFilter='blur(10px)'
             borderRadius="full"
             dropShadow="2xl"
             px={10} gap={5}
             py={5}>
          <SlQuestion size={25}/>
          <Box h="20px">
            <Divider orientation='vertical'/>
          </Box>
          <SlUser size={25}/>
        </Box>
      </Flex>
    </Box>
  )
}

/*

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

 */