import {Box, Input, Skeleton, Text} from "@chakra-ui/react";
import {Field} from "formik";

const Autor = (props: any) => {
  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Autor</Text>
        <Skeleton isLoaded={true}>
          <Field as={Input} name="autor" placeholder="např. Jan Novák">
          </Field>
        </Skeleton>
      </Box>
    </>
  )
}

export default Autor