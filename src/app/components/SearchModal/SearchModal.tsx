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
  ModalOverlay
} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import VedouciPrace from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/VedouciPrace";
import OborPrace from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/OborPrace";
import SearchInModal from "@/app/components/SearchModal/ModalComponents/SearchInModal";
import ModalDivider from "@/app/components/SearchModal/ModalComponents/ModalDivider";
import RozmeziLet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/RozmeziLet";
import Tagy from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Tagy";
import Predmet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Predmet";
import Autor from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Autor";
import {useSearchFunctions} from "@/app/configs/useSearchFunctions";

const SearchModal = (props: any) => {
  const {
    isOpen,
    //onOpen,
    onClose
  } = props

  const {
    initialFormValues,
    validationSchema,
    router,
    onKeyDown,
    oldestYear,
    isLoading
  } = useSearchFunctions()
  return (
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
            onSubmit={(values) => {
              //sendSearch(values.searchString)
              sessionStorage.clear()
              sessionStorage.setItem('search_string', JSON.stringify(values))
              router.push("/vyhledane-prace")
            }}
            initialValues={{searchString: ""}}>
            <Form>
              <SearchInModal/>
            </Form>
          </Formik>
          <ModalDivider/>
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values) => {
              //sendFilter(values)
              const obor_array = []
              values.obor_stroj ? obor_array.push("stroj") : null
              values.obor_it ? obor_array.push("it") : null
              values.obor_elektro ? obor_array.push("elektro") : null
              const reformatedValues = {
                obor: obor_array,
                pocatecni_rok: Number(values.rozmezi_let[0]),
                koncovy_rok: Number(values.rozmezi_let[1]),
                jmeno_prijmeni: values.jmeno_prijmeni,
                predmet: values.predmet,
                vedouci: values.vedouci,
                tagy: values.tagy
              }
              sessionStorage.clear()
              sessionStorage.setItem('filter_params', JSON.stringify(reformatedValues))
              router.push("/vyhledane-prace")
              window.location.reload()
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
                  <RozmeziLet {...{setFieldValue, values, errors, oldestYear, isLoading}}/>
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
  )
}

export default SearchModal