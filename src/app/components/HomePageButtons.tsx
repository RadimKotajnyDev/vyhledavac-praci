'use client'
import {Box, Button, Flex, IconButton, Text, useDisclosure} from "@chakra-ui/react";

import {SlMagnifier} from "react-icons/sl";
import SearchModal from "@/app/components/SearchModal/SearchModal";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {IoIosBug} from "react-icons/io";


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
      <Box pos="absolute" bottom={5} left={5}>
        <Link href="https://forms.gle/7gJK7P3PSxgAknCg7" passHref target="_blank">
        <IconButton aria-label="report-a-bug-button" colorScheme="red"
                    icon={<IoIosBug/>} onClick={() => console.log("reported.")}/>
      </Link>
      </Box>
    </>
  )
}

export default HomePageButtons