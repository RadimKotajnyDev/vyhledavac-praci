import {Box, Select, Text} from "@chakra-ui/react";
import {Field} from "formik";

const SkolniRok = () => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Školní rok</Text>
        <Field as={Select} name="skolni_rok">
          <option value="2023/2024">2023/2024</option>
          <option value="2024/2025">2024/2025</option>
        </Field>
      </Box>
    </>
  )
}

export default SkolniRok