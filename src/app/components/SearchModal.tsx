'use client'
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import {SlMagnifier} from "react-icons/sl";
import {SearchTags} from "@/app/components/SearchTags";
import {YearRange} from "@/app/components/YearRange";

export const SearchModal = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="green"
        variant="solid"
        mt={5}
        borderRadius="full"
        px={9} py={7}
        w="fit-content" fontSize="lg"
        rightIcon={<SlMagnifier size={20}/>}
      >
        Začít
      </Button>
      <Modal
        //isCentered={true}
        size="3xl"
        isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Vyhledat práci</ModalHeader>
          <ModalCloseButton/>
          <ModalBody gap={10}>
            <InputGroup size='lg'>
              <Input size="lg" colorScheme="green"
                     placeholder='Zadejte jméno autora, název práce nebo klíčové slovo...'/>
              <InputRightAddon>
                <SlMagnifier/>
              </InputRightAddon>
            </InputGroup>
            <Box position='relative' py={5}>
              <Divider/>
              <AbsoluteCenter _dark={{background: "gray.700"}}
                              _light={{background: "white"}}
                              px='4'>
                nebo
              </AbsoluteCenter>
            </Box>
            <Box display="flex" w="full" justifyItems="between" gap={20}>
              <Box display="flex" flexDir="column" w="full" borderRadius="md"
                   p={3} border="1px" borderColor='gray.600'>
                <Text fontSize="xl">Obor</Text>
                <Checkbox size="lg" colorScheme="green">Strojínerství</Checkbox>
                <Checkbox size="lg" colorScheme="green" defaultChecked>Informační technologie</Checkbox>
                <Checkbox size="lg" colorScheme="green">Elektrotechnika</Checkbox>
              </Box>
              <Box w="full" borderRadius="md"
                   p={3} border="1px" borderColor='gray.600'>
                <Text fontSize="xl">Rozmezí let</Text>
                <YearRange />
              </Box>
            </Box>
            <Box display="flex" w="full" justifyItems="between" gap={20} pt={5}>
              <Box w="full" borderRadius="md"
                   p={3} border="1px" borderColor='gray.600'>
                <Text fontSize="xl">Vedoucí práce</Text>
                <Select placeholder='Vyberte možnost'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Box>
              <SearchTags />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Center w="100%">
              <Button colorScheme='green'>
                Použít
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}