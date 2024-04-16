import {IconButton, Input, InputGroup} from "@chakra-ui/react";
import {SlMagnifier} from "react-icons/sl";
import {Field} from "formik";

const SearchBarInModal = () => {
  return (
    <InputGroup size='lg'>
      <Field name="searchString" as={Input} size="lg" colorScheme="green" roundedRight={0} color="white"
             placeholder='Zadejte jméno autora, název práce nebo klíčové slovo...'/>
      <IconButton roundedLeft={0} aria-label='Search button' type="submit" icon={<SlMagnifier />} />
    </InputGroup>
  )
}

export default SearchBarInModal