'use client'
import {Box, Select, Text} from "@chakra-ui/react";
import {Field} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";


const Predmet = () => {

  const [predmety, setPredmety] = useState([])
  useEffect(() => {
    async function getPredmety() {
      await axios.get("http://127.0.0.1:8000/get-predmety")
        .then(r => setPredmety(r.data))
        .catch(error => alert(error))
    }

    getPredmety()
  }, [])

  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Předmět</Text>
        <Field as={Select} name="predmet" placeholder='Vyberte možnost'>
          {predmety && predmety.map((predmet: string, index: number) => (
            <option key={index} value={predmet}>{predmet}</option>
          ))}
        </Field>
      </Box>
    </>
  )
}

export default Predmet