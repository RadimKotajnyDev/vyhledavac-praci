'use client'
import {Box, Button, Divider, Flex, Spacer} from "@chakra-ui/react";
import DarkModeButton from "@/app/components/DarkModeButton";
import {useRouter} from "next/navigation";
import {SlMagnifier, SlUser} from "react-icons/sl";

export const Navbar = () => {

  const router = useRouter()

  return (
    <Box as="nav" mx={5} pt={5} color="white" display={{base: "none", md: "block"}}>
      <Flex //bg="lightgray"
        //opacity={90}
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        borderRadius="full"
        dropShadow="2xl"
        alignItems="center"
      >
        <Button onClick={() => router.push("/")}
                display="flex" justifyItems="center" alignItems="center" gap={2}
                bg='blackAlpha.300'
                color="white"
                _hover={{color: "black", backgroundColor: "white"}}
                backdropFilter='blur(10px)'
                borderRadius="full"
                dropShadow="2xl"
                px={12}
                py={8}
                leftIcon={<SlMagnifier/>}
        >
          ThesisSpotlight
        </Button>
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
          <DarkModeButton/>
          <Box h="25px">
            <Divider bg="white" color="white" orientation='vertical'/>
          </Box>
          <SlUser size={25}/>
        </Box>
      </Flex>
    </Box>
  )
}
