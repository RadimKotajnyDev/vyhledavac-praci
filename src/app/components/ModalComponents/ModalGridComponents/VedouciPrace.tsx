'use client'
import {Box, Select, Text} from "@chakra-ui/react";
import {Field} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";


const VedouciPrace = () => {
  useEffect(() => {
    async function getVedouci() {
      await axios.get("http://127.0.0.1:8000/get-vedouci")
        .then(r => setVedouciList(r.data))
        .catch(error => alert(error))
    }

    getVedouci()
  }, [])
  const [vedouciList, setVedouciList] = useState([])

  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Vedoucí práce</Text>
        <Field as={Select} name="vedouci" placeholder='Vyberte možnost'>
          {vedouciList && vedouciList.map((vedouci: string, index: number) => (
            <option key={index} value={vedouci}>{vedouci}</option>
          ))}
        </Field>
      </Box>
    </>
  )
}

export default VedouciPrace