import {Box, Heading} from "@chakra-ui/react";

const PermissionDenied = () => {
  return (
    <Box w="full" mt={24}>
      <Heading textAlign="center">Zde nemáte přístup.</Heading>
    </Box>
  )
}
export default PermissionDenied