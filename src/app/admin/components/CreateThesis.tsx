'use client'

import {
  Box,
  Button,
  Center,
  Grid, GridItem, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, Select, Skeleton, Text, Textarea,
  useDisclosure
} from '@chakra-ui/react'
import {Field, Form, Formik} from "formik";
import Autor from "@/app/admin/components/CreateThesisComponents/Autor";
import Obor from "@/app/admin/components/CreateThesisComponents/Obor";
import Predmet from "@/app/admin/components/CreateThesisComponents/Predmet";
import Vedouci from "@/app/admin/components/CreateThesisComponents/Vedouci";
import SkolniRok from "@/app/admin/components/CreateThesisComponents/SkolniRok";
import ObsahPrace from "@/app/admin/components/CreateThesisComponents/Obsah";
import PraktickaCast from "@/app/admin/components/CreateThesisComponents/PraktickaCast";

const CreateThesis = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Vytvořit práci</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Vytvoření práce</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Formik initialValues={{value: ""}} onSubmit={(values) => console.log(values)}>
              <Form>
                <Grid
                  templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
                  templateRows={{base: "repeat(2, 1fr)", md: "1fr"}}
                  gap="5"
                  w="full"
                  justifyContent="space-between"
                  alignItems="space-between"
                >
                  <Autor/>
                  <Obor/>
                  <Predmet/>
                  <Vedouci/>
                  <SkolniRok/>
                  {/* Možná dodělat tagy? neexistuje zatím sloupec tabulky */}
                  <GridItem />
                  <ObsahPrace/>
                  <PraktickaCast />
                </Grid>
                <Center w="100%" my={5}>
                  <Button isDisabled={false} type="submit" colorScheme='green'>
                    Vytvořit práci
                  </Button>
                </Center>
              </Form>
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateThesis