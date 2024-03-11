'use client'

import {useState} from 'react';
import {
  AbsoluteCenter,
  Box, Button, Divider,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useColorMode, useDisclosure,
} from '@chakra-ui/react';
import {FaSun, FaMoon, FaFilter, FaSearch} from 'react-icons/fa';
import {HiOutlineCog} from 'react-icons/hi';
import {BsSearch} from 'react-icons/bs';
import {SlUser} from "react-icons/sl";
import {useRouter} from "next/navigation";
import SearchModal from "@/app/components/SearchModal/SearchModal";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('');
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box pt={2} px={3}>
      <Box bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 55, 72, 0.5)'} p={4} rounded="3xl">
        <Flex alignItems="center">
          <Button leftIcon={<FaSearch fill="white"/>} variant="ghost" color="white" onClick={() => router.push("/")}>
            ThesisSpotlight
          </Button>
          <Spacer/>
          <Flex alignItems="center">
            <InputGroup gap={3} w="600px">
              <InputLeftElement
                pointerEvents="none"
                children={<FaSearch color="white"/>}
              />
              <Input
                type="text"
                color="white"
                placeholder="Zadejte jméno autora, název práce nebo klíčové slovo..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button
                px={5}
                onClick={onOpen}
                variant="outline"
                aria-label="Filter"
                color="white"
                leftIcon={<FaFilter fill="white"/>}
              >Filtrovat</Button>
            </InputGroup>
          </Flex>
          <Spacer/>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon fill="white"/> : <FaSun fill="white"/>}
            onClick={toggleColorMode}
            variant="ghost"
          />

          <IconButton
            aria-label="Admin panel"
            icon={<SlUser fill="white"/>}
            variant="ghost"
          />
        </Flex>
      </Box>
      <SearchModal {...{isOpen, onOpen, onClose}} />
    </Box>
  );
};

export default Navbar;


/*
import {Box, Button, Divider, Flex, IconButton, Spacer, useColorModeValue} from "@chakra-ui/react";
import DarkModeButton from "@/app/components/DarkModeButton";
import {useRouter} from "next/navigation";
import {SlMagnifier, SlUser} from "react-icons/sl";

export const Navbar = () => {

  const router = useRouter()

  return (
    <Box as="nav" mx={5} pt={5} color="white" display={{base: "none", md: "block"}}>
      <Flex //bg="lightgray"
        //opacity={90}
        color="white"
        bg="blackAlpha.300"
        backdropFilter='blur(10px)'
        borderRadius="full"
        dropShadow="2xl"
        alignItems="center"
      >
        <Button onClick={() => router.push("/")}
                display="flex" justifyItems="center" alignItems="center" gap={2}
                bg="blackAlpha.300"
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
             bg="blackAlpha.300"
             backdropFilter='blur(10px)'
             borderRadius="full"
             dropShadow="2xl"
             px={10} gap={5}
             py={5}>
          <DarkModeButton/>
          <Box h="25px">
            <Divider bg="white" color="white" orientation='vertical'/>
          </Box>
          <IconButton onClick={() => alert("čau vale")}
                      aria-label="admin-page-button" size="0" variant="link" icon={<SlUser size={25}/>}/>
        </Box>
      </Flex>
    </Box>
  )
}

 */
