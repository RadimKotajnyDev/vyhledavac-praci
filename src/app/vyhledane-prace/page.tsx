'use client'
import {
  Box,
  Button,
  Center,
  DarkMode,
  Flex,
  Icon,
  IconButton,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {useSearchFunctions} from "@/app/configs/useSearchFunctions";
import axios from "axios";
import {server_address} from "@/app/configs/apiConfig";

type PraceType = {
  id?: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
  concat?(newData: any): APIData | undefined;
}

type APIData = {
  Message?: string;
  pocet_stran: number,
  prace: PraceType[]
  concat(prace: PraceType[]): APIData | undefined;
};

const TableHeads = {
  apiNames: [
    "skolni_rok",
    "tema",
    "obor",
    "predmet",
    "jmeno_prijmeni",
    "vedouci"
  ],
  czechNames: [
    "Školní rok",
    "Název práce (téma)",
    "Obor",
    "Předmět",
    "Autor",
    "Vedoucí"
  ]
}


const VyhledanePrace = () => {
  const router = useRouter()
  const toast = useToast()
  //const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.1)");
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(45, 55, 72, 0.25)");

  const {slugify} = useSearchFunctions()

  const [apiData, setAPIData] = useState<APIData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [maxPageNumber, setMaxPageNumber] = useState<number>(0)
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("tema")
  const [sortDirDown, setSortDirDown] = useState<boolean>(true)

  const [isButtonHidden, hideButton] = useState<boolean>(false)

  useEffect(() => {
    async function loadData() {
      const searchString = sessionStorage.getItem("search_string")
      const filter_params = sessionStorage.getItem("filter_params")
      if (searchString) {
        alert("search ještě nefunguje. :)")
        /*
        axios.post(`${server_address}/search`, null, {params: {vyraz: JSON.parse(searchString)}})
          .then(r => {
            console.log(r)
            setAPIData(r.data)
            setIsLoading(false)
            toast({
              title: "Vyhledání proběhlo úspěšně.",
              status: "success",
              duration: 2000,
              isClosable: true,
            })
          })
          .catch(e => toast({
            title: e,
            status: "error",
            isClosable: true,
          }))
         */
      } else if (filter_params) {
        axios.post(`${server_address}/filtr-strana/${pageNumber}`,
          JSON.parse(filter_params),
          {params: {sortBy: sortBy, directionDown: sortDirDown}})
          .then(r => {
            console.log(r)
            setMaxPageNumber(r.data.pocet_stran)
            if (pageNumber > 1 && loadMore) {
              if (r.data.prace.length > 0 && loadMore) {
                setAPIData(prevState => prevState?.concat(r.data.prace))
              } else {
                hideButton(true)
                toast({
                  title: "Načteno maximálně prací",
                  status: "info",
                  position: 'bottom-right',
                  isClosable: true,
                  duration: 1500
                })
              }
            } else {
              setAPIData(r.data.prace)
              /*
              toast({
                title: "Vyhledání proběhlo úspěšně.",
                status: "success",
                position: 'bottom-right',
                duration: 2000,
                isClosable: true,
              })

               */
            }
            setIsLoading(false)
          })
          .catch((e) => {
            toast({
              title: e.message,
              status: "error",
              isClosable: true,
            })
          })
      }
      if (!filter_params && !searchString) {
        router.push("/")
        toast({
          title: "Něco se nepovedlo. \nZkuste vyhledat práci znovu.",
          status: "error",
          duration: 2500,
          isClosable: true,
        })
      }
    }

    loadData()
  }, [pageNumber, sortBy, sortDirDown]);

  useEffect(() => {
    console.log(sortBy)
  }, [sortBy]);


  if (isLoading) {
    return (
      <Box color="white" w="full" justifyContent="center" gap={10}
           minH="80vh" flexDir="column" placeItems="center" display="flex">
        <Spinner size='xl'/>
        <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
      </Box>
    )
  } else {
    if (Array.isArray(apiData) && apiData.length > 0) {
      return (
        <Flex color="white" w="full" minH="80vh"
              flexDir="column"
              justifyContent="space-around"
              justifyItems="center" placeItems="center"
        >
          <DarkMode>
            <TableContainer //bg="rgba(255, 255, 255, 0.1)"
              bgColor={bgColor}
              maxH="80vh" overflowY="auto"
              //boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
              //backdropFilter="blur( 4px )"
              borderRadius="xl"
              p={8}
              m={4}>
              <Table variant="unstyled">
                <Thead>
                  <Tr>
                    {TableHeads.czechNames.map((item, index) => (
                      <Th key={index} _hover={{
                        cursor: "pointer",
                        opacity: "80%"
                      }} onClick={() => {
                        setSortBy(TableHeads.apiNames[index])
                        setSortDirDown(!sortDirDown)
                      }}>
                        <Flex placeItems="center">
                          <Text>{item}</Text>
                          {sortBy === TableHeads.apiNames[index] ? <Icon as={sortDirDown ? IoMdArrowDropdown : IoMdArrowDropup} boxSize={5}></Icon> : <></>}
                        </Flex>
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {apiData && apiData.map((data: PraceType, index: number) => (
                    <Tr key={index} cursor="pointer"
                        _light={{borderY: "1px solid rgba(255, 255, 255, 0.25)"}}
                        _dark={{borderY: "1px solid rgba(255, 255, 255, 0.25)"}}
                        _hover={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)}>
                      <Td>{data.skolni_rok}</Td>
                      <Td style={{whiteSpace: 'normal'}}>{data.tema}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.obor}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.predmet}</Td>
                      <Td>{data.jmeno_prijmeni}</Td>
                      <Td>{data.vedouci}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Center>
                {/* FIXME: next line has a bug*/}
                <Button mt={5} display={isButtonHidden ? "none" : "block" || apiData.length < 15 ? "none" : "block"}
                        onClick={() => {
                          setLoadMore(true)
                          setPageNumber(prevState => prevState + 1)
                        }}>načíst další</Button>
              </Center>
            </TableContainer>
            <Stack direction="row" alignItems="center">
              <IconButton isDisabled={pageNumber == 1 || loadMore} onClick={() => {
                if (pageNumber > 1) {
                  if (loadMore) {
                    setLoadMore(false)
                    setPageNumber(1)
                  } else {
                    hideButton(true)
                    setPageNumber(prevState => prevState - 1)
                  }
                }
              }}
                          aria-label="previous-page" icon={<IoIosArrowBack/>}/>
              <Text>{loadMore ? "⚡" : `${pageNumber} / ${maxPageNumber}`}</Text>
              <IconButton isDisabled={pageNumber == maxPageNumber || loadMore} onClick={() => {
                if (pageNumber) {
                  if (loadMore) {
                    setLoadMore(false)
                    setPageNumber(1)
                  } else {
                    hideButton(true)
                    setPageNumber(prevState => prevState + 1)
                  }
                }
              }}
                          aria-label="next-page" icon={<IoIosArrowForward/>}/>
            </Stack>
            {/*
            // preparing the side panel
             <IconButton rounded="full"
                        aria-label="search modal button"
                        boxSize="5rem"
                        colorScheme="" icon={<SlMagnifier size={40}/>} />
            */}
          </DarkMode>
        </Flex>
      )
    } else if (apiData && apiData.Message) {
      return (
        <Box color="white" w="full" justifyContent="center" gap={10}
             minH="80vh" flexDir="column" placeItems="center" display="flex">
          <Text fontSize="3xl">{apiData.Message}</Text>
          <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
        </Box>
      )
    } else return (
      <>
        <Box color="white" w="full" justifyContent="center" gap={10}
             minH="80vh" flexDir="column" placeItems="center" display="flex">
          <Text fontSize="3xl">Nenalezeny žádné práce.</Text>
          <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
        </Box>
      </>
    );
  }
}
export default VyhledanePrace
