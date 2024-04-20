'use client'

import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import {FaFilter, FaHome, FaMoon, FaSearch, FaSun} from 'react-icons/fa';
import {SlUser} from "react-icons/sl";
import {useRouter} from "next/navigation";
import SearchModal from "@/app/components/SearchModal/SearchModal";
import {Form, Formik} from "formik";
import SearchBarInModal from "@/app/components/SearchModal/ModalComponents/SearchBarInModal";
import {IoMdMenu} from "react-icons/io";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const router = useRouter()
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Box display={{base: "block", md: "none"}} pl={5} pt={5}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            size="lg"
            icon={<IoMdMenu size={40}/>}
            variant='outline'
          />
          <MenuList>
            <Button
              py={10}
              onClick={() => router.push("/")}
              variant="ghost"
              w="full"
              aria-label="Filter"
              rightIcon={<FaHome/>}
            >Domů</Button>
            <Button
              py={10}
              onClick={onOpen}
              variant="ghost"
              w="full"
              aria-label="Filter"
              rightIcon={<FaSearch/>}
            >Hledat</Button>
            <Button
              py={10}
              w="full"
              aria-label="Admin panel"
              rightIcon={<SlUser/>}
              variant="ghost"
            >Admin</Button>
            <Button
              py={10}
              w="full"
              aria-label="Toggle color mode"
              rightIcon={colorMode === 'light' ? <FaMoon/> : <FaSun fill="white"/>}
              onClick={toggleColorMode}
              variant="ghost"
            >{colorMode === "light" ? "Tmavý" : "Světlý"} režim</Button>
          </MenuList>
        </Menu>
      </Box>
      <Box
           pt={2} px={3} display={{base: "none", md: "block"}}>
        <Box bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 55, 72, 0.5)'} p={4} rounded="3xl">
          <Flex alignItems="center">
            <Button leftIcon={<FaSearch fill="white"/>} variant="ghost" color="white" onClick={() => router.push("/")}>
              ThesisSpotlight&nbsp;<Box as="span" fontWeight="350">(Beta verze)</Box>
            </Button>
            <Spacer/>
            <Flex alignItems="center" placeItems="center" justifyContent="center" gap={3} w="600px">
              <Box w="full">
                <Formik
                  onSubmit={(values) => {
                    sessionStorage.clear()
                    sessionStorage.setItem('search_string', JSON.stringify(values.searchString))
                    router.push("/vyhledane-prace")
                    window.location.reload()
                  }}
                  initialValues={{searchString: ""}}>
                  <Form>
                    <SearchBarInModal/>
                  </Form>
                </Formik>
              </Box>
              <Button
                px={5}
                size="lg"
                onClick={onOpen}
                variant="outline"
                aria-label="Filter"
                color="white"
                leftIcon={<FaFilter fill="white"/>}
              >Filtrovat</Button>
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
    </>
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
