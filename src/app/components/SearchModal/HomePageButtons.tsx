'use client'
import {
  Button,
  Center,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {Form, Formik} from "formik";

import {SlMagnifier} from "react-icons/sl";
import VedouciPrace from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/VedouciPrace";
import OborPrace from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/OborPrace";
import SearchInModal from "@/app/components/SearchModal/ModalComponents/SearchInModal";
import ModalDivider from "@/app/components/SearchModal/ModalComponents/ModalDivider";
import RozmeziLet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/RozmeziLet";
import Tagy from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Tagy";
import Predmet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Predmet";
import {useSearchFunctions} from "@/app/configs/useSearchFunctions";
import Autor from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Autor";
import SearchModal from "@/app/components/SearchModal";


const HomePageButtons = () => {


  const {
    onKeyDown,
    sendSearch,
    sendFilter,
    router,
    initialFormValues,
    validationSchema,
    getAllPrace
  } = useSearchFunctions()

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Flex flexDir={{base: "column", md: "row"}} alignItems="center" gap={5}>
        <Button
          onClick={onOpen}
          colorScheme="green"
          variant="solid"
          mt={5}
          borderRadius="full"
          px={9} py={7}
          w="fit-content" fontSize={{base: "sm", md: "lg"}}
          rightIcon={<SlMagnifier size={20}/>}
        >
          Hledat
        </Button>
        <Button
          colorScheme="green"
          mt={5}
          borderRadius="full"
          px={9} py={7}
          w="fit-content" fontSize={{base: "sm", md: "lg"}}
          onClick={() => getAllPrace()} variant="ghost">
          Zobrazit všechny práce
        </Button>
      </Flex>
      <SearchModal {...{isOpen, onOpen, onClose}}/>
    </>
  )
}

export default HomePageButtons