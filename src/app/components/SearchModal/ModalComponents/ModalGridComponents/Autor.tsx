'use client'
import {Box, Select, Skeleton, Text} from "@chakra-ui/react";
import {Field} from "formik";

interface AutorInteface {
  authors: string[],
  isAPILoading: boolean
}

const Autor = (props: AutorInteface) => {

  const {
    authors, isAPILoading
  } = props



  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Autor</Text>
        <Skeleton isLoaded={!isAPILoading}>
          <Field as={Select} name="jmeno_prijmeni" placeholder='Vyberte možnost'>
          {authors && authors.map((autor: string, index: number) => (
            <option key={index} value={autor}>{autor}</option>
          ))}
        </Field>
        </Skeleton>
      </Box>
    </>
  )
}

export default Autor