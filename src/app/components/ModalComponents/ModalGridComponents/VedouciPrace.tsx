import {Box, Select, Text} from "@chakra-ui/react";

const VedouciPrace = () => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
                              _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Vedoucí práce</Text>
        <Select placeholder='Vyberte možnost'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
    </>
  )
}

export default VedouciPrace