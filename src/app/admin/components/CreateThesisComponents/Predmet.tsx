import {Box, Input, Text} from "@chakra-ui/react";
import {Field} from "formik";

const Predmet = () => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Předmět</Text>
        <Field as={Input} name="predmet" placeholder="např. WEB">
        </Field>
      </Box>
    </>
  )
}

export default Predmet