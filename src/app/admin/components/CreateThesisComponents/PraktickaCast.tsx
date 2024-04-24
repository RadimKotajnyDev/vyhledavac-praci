import {Box, Text, Textarea} from "@chakra-ui/react";
import {Field} from "formik";

const PraktickaCast = () => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Praktická část</Text>
        <Field as={Textarea} minH="30rem" minW={{base: "5rem", md: "30rem"}}
               name="prakticka_cast" placeholder="V praktické části...">
        </Field>
      </Box>
    </>
  )
}

export default PraktickaCast