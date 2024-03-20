'use client'
import {Box, Select, Skeleton, Text} from "@chakra-ui/react";
import {Field} from "formik";

interface PredmetInterface {
  predmety: string[],
  isAPILoading: boolean
}

const Predmet = (props: PredmetInterface) => {

  const {
    predmety, isAPILoading
  } = props



  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={3}>Předmět</Text>
       <Skeleton isLoaded={!isAPILoading}>
          <Field as={Select} name="predmet" placeholder='Vyberte možnost'>
          {predmety && predmety.map((predmet: string, index: number) => (
            <option key={index} value={predmet}>{predmet}</option>
          ))}
        </Field>
       </Skeleton>
      </Box>
    </>
  )
}

export default Predmet