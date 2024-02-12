'use client'
import {
  Button,
  Center,
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
import VedouciPrace from "@/app/components/ModalComponents/ModalGridComponents/VedouciPrace";
import OborPrace from "@/app/components/ModalComponents/ModalGridComponents/OborPrace";
import SearchInModal from "@/app/components/ModalComponents/SearchInModal";
import ModalDivider from "@/app/components/ModalComponents/ModalDivider";
import RozmeziLet from "@/app/components/ModalComponents/ModalGridComponents/RozmeziLet";
import Tagy from "@/app/components/ModalComponents/ModalGridComponents/Tagy";

const SearchModal = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="green"
        variant="solid"
        mt={5}
        borderRadius="full"
        px={9} py={7}
        w="fit-content" fontSize="lg"
        rightIcon={<SlMagnifier size={20}/>}
      >
        Začít
      </Button>
      <Modal
        //isCentered={true}
        size="3xl"
        isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Vyhledat práci</ModalHeader>
          <ModalCloseButton/>
          <ModalBody gap={10}>
            <SearchInModal/>
            <ModalDivider/>
            <Formik
              initialValues={
                {
                  obor_stroj: false,
                  obor_it: false,
                  obor_elektro: false,
                  rozmezi_let: [2000, 2024],
                  vedouci_prace: "",
                  tagy: [""]
                }
              }
              onSubmit={(values) => console.log(values)}
            >
              {({errors, values, setFieldValue}) => (
                <Form>
                  <Grid
                    templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
                    templateRows={{base: "repeat(2, 1fr)", md: "1fr"}}
                    gap="5"
                    w="full"
                    justifyContent="space-between"
                    alignItems="space-between"
                  >
                    <OborPrace/>
                    <RozmeziLet {...{setFieldValue, values}}/>
                    <VedouciPrace/>
                    <Tagy/>
                  </Grid>
                  <Center w="100%" my={5}>
                    <Button type="submit" colorScheme='green'>
                      Použít
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