import {Box, Checkbox, Input, Radio, RadioGroup, Text} from "@chakra-ui/react";
import {Field} from "formik";

const Obor = () => {
  return (
    <Box display="flex" flexDir="column" w="full" borderRadius="md"
           p={5} border="1px"  _dark={{borderColor: "gray.600"}}
                              _light={{borderColor: "gray.200"}}
           borderColor='gray.600'>

        <Text fontSize="xl">Obor</Text>
      <RadioGroup name="obor">
        <Field name="obor" value="stroj" as={Radio} size="lg" colorScheme="green">Strojírenství</Field>
        <Field name="obor" value="it" as={Radio} size="lg" colorScheme="green">Informační technologie</Field>
        <Field name="obor" value="elektro" as={Radio} size="lg" colorScheme="green">Elektrotechnika</Field>
      </RadioGroup>
      </Box>
  )
}

export default Obor