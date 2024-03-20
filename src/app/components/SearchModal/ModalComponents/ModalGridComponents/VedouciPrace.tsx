'use client'
import {Box, Select, Skeleton, Text} from "@chakra-ui/react";
import {Field} from "formik";

interface VedouciInterface {
  vedouciList: string[],
  isAPILoading: boolean
}

const VedouciPrace = (props: VedouciInterface) => {

  const {
    vedouciList, isAPILoading
  } = props


  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Vedoucí práce</Text>
       <Skeleton isLoaded={!isAPILoading}>
          <Field as={Select} name="vedouci" placeholder='Vyberte možnost'>
          {vedouciList && vedouciList.map((vedouci: string, index: number) => (
            <option key={index} value={vedouci}>{vedouci}</option>
          ))}
        </Field>
       </Skeleton>
      </Box>
    </>
  )
}

export default VedouciPrace