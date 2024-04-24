import {Box, Text, Textarea} from "@chakra-ui/react";
import {Field} from "formik";

const ObsahPrace = () => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Obsah práce</Text>
        <Field as={Textarea} name="obsah" minH="30rem" minW={{base: "5rem", md: "30rem"}}
               placeholder="Má práce se zabývá...">
        </Field>
      </Box>
    </>
  )
}

export default ObsahPrace