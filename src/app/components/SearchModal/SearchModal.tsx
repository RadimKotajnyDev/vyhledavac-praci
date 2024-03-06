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


const SearchModal = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const {
    onKeyDown,
    sendSearch,
    sendFilter,
    initialFormValues,
    validationSchema,
    getAllPrace
  } = useSearchFunctions()


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
      <Modal
        //isCentered={true}
        size="3xl"
        isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropBlur='5px'/>
        <ModalContent>
          <ModalHeader>Vyhledat práci</ModalHeader>
          <ModalCloseButton/>
          <ModalBody gap={10}>
            <Formik
              onSubmit={(values) => sendSearch(values.searchString)}
              initialValues={{searchString: ""}}>
              <Form>
                <SearchInModal/>
              </Form>
            </Formik>
            <ModalDivider/>
            <Formik
              initialValues={initialFormValues}
              onSubmit={(values) => {
                sendFilter(values)
              }}
              validationSchema={validationSchema}
            >
              {({errors, values, setFieldValue}) => (
                <Form onKeyDown={onKeyDown}>
                  <Grid
                    templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
                    templateRows={{base: "repeat(2, 1fr)", md: "1fr"}}
                    gap="5"
                    w="full"
                    justifyContent="space-between"
                    alignItems="space-between"
                  >
                    <OborPrace/>
                    <RozmeziLet {...{setFieldValue, values, errors}}/>
                    <Autor/>
                    <VedouciPrace/>
                    <Predmet/>
                    <Tagy {...{setFieldValue, values}}/>
                  </Grid>
                  <Center w="100%" my={5}>
                    <Button type="submit" colorScheme='green'>
                      Filtrovat
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal