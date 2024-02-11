import {Box, Checkbox, Text} from "@chakra-ui/react";

const OborPrace = () => {
  return (
    <>
      <Box display="flex" flexDir="column" w="full" borderRadius="md"
           p={5} border="1px"  _dark={{borderColor: "gray.600"}}
                              _light={{borderColor: "gray.200"}}
           borderColor='gray.600'>
        <Text fontSize="xl">Obor</Text>
        <Checkbox size="lg" colorScheme="green">Strojínerství</Checkbox>
        <Checkbox size="lg" colorScheme="green" defaultChecked>Informační technologie</Checkbox>
        <Checkbox size="lg" colorScheme="green">Elektrotechnika</Checkbox>
      </Box>
    </>
  )
}
export default OborPrace