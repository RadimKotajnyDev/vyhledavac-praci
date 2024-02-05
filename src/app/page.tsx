'use client'
import {
  Box,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Divider,
  AbsoluteCenter,
  Center,
  GridItem,
  Grid,
  Checkbox,
  RangeSliderThumb,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack, InputGroup, InputRightAddon
} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
import {SlMagnifier} from "react-icons/sl";

export default function Home() {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
        <Box display="flex" flexDir="column" textAlign="left" gap={2}>
          <Heading fontSize="7xl"
          >ThesisSpotlight</Heading>
          <Text fontSize="3xl">
            Potřebujete se inspirovat?
            <br/> Hledáte zajímavé nápady studentů?
            <br/> Nebo vás jen zajímá co už někdo vytvořil?
            <br/> Pomůžeme vám najít ročníkové práce.
          </Text>
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
                    <SlMagnifier />
                  </InputRightAddon>
                </InputGroup>
                <Box position='relative' py={5}>
                  <Divider/>
                  <AbsoluteCenter bg='white' px='4'>
                    nebo
                  </AbsoluteCenter>
                </Box>
                <Box display="flex" w="full" justifyItems="between" gap={20}>
                  <Box display="flex" flexDir="column" w="full" borderRadius="md"
                       p={3} border="1px" borderColor='gray.200'>
                    <Text fontSize="xl">Obor</Text>
                    <Checkbox size="lg" colorScheme="green">Strojínerství</Checkbox>
                    <Checkbox size="lg" colorScheme="green" defaultChecked>Informační technologie</Checkbox>
                    <Checkbox size="lg" colorScheme="green">Elektrotechnika</Checkbox>
                  </Box>
                  <Box w="full" borderRadius="md"
                       p={3} border="1px" borderColor='gray.200'>
                    <Text fontSize="lg">Rozmezí let</Text>
                    <RangeSlider colorScheme="green" aria-label={['min', 'max']} defaultValue={[30, 70]}>
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack/>
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0}/>
                      <RangeSliderThumb index={1}/>
                    </RangeSlider>
                  </Box>
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
        </Box>
        <Box w="500px" h="700px">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.48/build/spline-viewer.js"></script>
          {/* @ts-ignore */}
          <spline-viewer url="https://prod.spline.design/bbH-SUXSTkvFd2Gq/scene.splinecode"></spline-viewer>
        </Box>
      </Box>
    </>
  );
}
