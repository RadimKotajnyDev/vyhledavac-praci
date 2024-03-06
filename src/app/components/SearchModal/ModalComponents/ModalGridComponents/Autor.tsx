'use client'
import {Box, Select, Text} from "@chakra-ui/react";
import {Field} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";


const Autor = () => {

  const [authors, setAuthors] = useState([])
  useEffect(() => {
    async function getAuthors() {
      await axios.get("http://127.0.0.1:8000/get-autori")
        .then(r => setAuthors(r.data))
        .catch(error => alert(error))
    }

    getAuthors()
  }, [])

  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Autor</Text>
        <Field as={Select} name="autor" placeholder='Vyberte možnost'>
          {authors && authors.map((autor: string, index: number) => (
            <option key={index} value={autor}>{autor}</option>
          ))}
        </Field>
      </Box>
    </>
  )
}

export default Autor