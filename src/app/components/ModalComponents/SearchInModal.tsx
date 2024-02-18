import {Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import {SlMagnifier} from "react-icons/sl";
import {Field} from "formik";

const SearchInModal = () => {
  return (
    <InputGroup size='lg'>
      <Field name="searchString" as={Input} size="lg" colorScheme="green"
             placeholder='Zadejte jméno autora, název práce nebo klíčové slovo...'/>
      <InputRightAddon>
        <SlMagnifier/>
      </InputRightAddon>
    </InputGroup>
  )
}

export default SearchInModal