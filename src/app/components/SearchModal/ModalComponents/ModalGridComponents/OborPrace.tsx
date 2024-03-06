import {Box, Checkbox, Text} from "@chakra-ui/react";
import {Field} from "formik";

const OborPrace = () => {
  return (
    <>
      <Box display="flex" flexDir="column" w="full" borderRadius="md"
           p={5} border="1px"  _dark={{borderColor: "gray.600"}}
                              _light={{borderColor: "gray.200"}}
           borderColor='gray.600'>
        <Text fontSize="xl">Obor</Text>
        <Field name="obor_stroj" as={Checkbox} size="lg" colorScheme="green">Strojírenství</Field>
        <Field name="obor_it" as={Checkbox} size="lg" colorScheme="green">Informační technologie</Field>
        <Field name="obor_elektro" as={Checkbox} size="lg" colorScheme="green">Elektrotechnika</Field>
      </Box>
    </>
  )
}
export default OborPrace