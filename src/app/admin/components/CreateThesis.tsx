'use client'

import {
  Button,
  Center,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import {Formik} from "formik";

const CreateThesis = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Vytvoření práce</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
           <Formik initialValues={{value: ""}}>
              <FormControl>

              </FormControl>
           </Formik>
          </ModalBody>

          <ModalFooter>
            <Center w="full">
              <Button colorScheme='green'>
                Vytvořit práci
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateThesis