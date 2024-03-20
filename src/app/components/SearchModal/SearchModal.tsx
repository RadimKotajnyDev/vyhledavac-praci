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
import SearchBarInModal from "@/app/components/SearchModal/ModalComponents/SearchBarInModal";
import ModalDivider from "@/app/components/SearchModal/ModalComponents/ModalDivider";
import RozmeziLet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/RozmeziLet";
import Tagy from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Tagy";
import Predmet from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Predmet";
import Autor from "@/app/components/SearchModal/ModalComponents/ModalGridComponents/Autor";
import {useSearchFunctions} from "@/app/configs/useSearchFunctions";
import {SearchModalValuesType} from "@/app/configs/ApiDataTypes";

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
    saveFilter,
    onKeyDown,
    oldestYear,
    predmety,
    authors,
    vedouciList,
    isAPILoading
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
              <SearchBarInModal/>
            </Form>
          </Formik>
          <ModalDivider/>
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values: SearchModalValuesType) => {
              //sendFilter(values)
              saveFilter(values)
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
                  <RozmeziLet {...{setFieldValue, values, errors, oldestYear, isAPILoading}}/>
                  <Autor {...{authors, isAPILoading}}/>
                  <VedouciPrace {...{vedouciList, isAPILoading}}/>
                  <Predmet {...{predmety, isAPILoading}}/>
                  <Tagy {...{setFieldValue, values}}/>
                </Grid>
                <Center w="100%" my={5}>
                  <Button isDisabled={isAPILoading} type="submit" colorScheme='green'>
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