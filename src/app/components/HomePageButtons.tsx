'use client'
import {Button, Flex, useDisclosure} from "@chakra-ui/react";

import {SlMagnifier} from "react-icons/sl";
import SearchModal from "@/app/components/SearchModal/SearchModal";
import {useRouter} from "next/navigation";


const HomePageButtons = () => {
  const router = useRouter()

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Flex flexDir={{base: "column", md: "row"}} alignItems="center" gap={5}>
        <Button
          onClick={onOpen}
          colorScheme="green"
          variant="solid"
          mt={5}
          borderRadius="full"
          px={9} py={7}
          w="fit-content" fontSize={{base: "sm", md: "lg"}}
          rightIcon={<SlMagnifier size={20}/>}
        >
          Hledat
        </Button>
        <Button
          colorScheme="green"
          mt={5}
          borderRadius="full"
          px={9} py={7}
          w="fit-content" fontSize={{base: "sm", md: "lg"}}
          onClick={() => {
            sessionStorage.clear()
            // @ts-ignore
            sessionStorage.setItem('search_string', null)
            router.push("/vyhledane-prace")
          }} variant="ghost">
          Zobrazit všechny práce
        </Button>
      </Flex>
      <SearchModal {...{isOpen, onOpen, onClose}}/>
    </>
  )
}

export default HomePageButtons