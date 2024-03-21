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
  Tr
} from "@chakra-ui/react"
import {IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {useVyhledanePrace} from "@/app/configs/useVyhledanePrace";
import {PraceType} from "@/app/configs/ApiDataTypes";


const VyhledanePrace = () => {

  const {
    slugify,
    TableHeads,
    setSortBy,
    setSortDirDown,
    isButtonHidden,
    bgColor,
    router,
    pageNumber,
    sortBy,
    sortDirDown,
    loadMore,
    isLoading,
    apiData,
    setLoadMore,
    setPageNumber,
    hideButton,
    maxPageNumber
  } = useVyhledanePrace()


  if (isLoading) {
    return (
      <Box color="white" w="full" justifyContent="center" gap={10}
           minH="80vh" flexDir="column" placeItems="center" display="flex">
        <Spinner size='xl'/>
        <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
      </Box>
    )
  } else {
    if (apiData && Array.isArray(apiData) && apiData.length > 0) {
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
                          {sortBy === TableHeads.apiNames[index] ?
                            <Icon as={sortDirDown ? IoMdArrowDropdown : IoMdArrowDropup} boxSize={5}></Icon> : <></>}
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
                <Button mt={5} display={isButtonHidden ? "none" : "block" || true ? "none" : "none"}
                        onClick={() => {
                          setLoadMore(true)
                          setPageNumber(prevState => prevState + 1)
                        }}>načíst další</Button>
              </Center>
            </TableContainer>
            <Stack direction="row" alignItems="center" hidden={maxPageNumber == 1} zIndex={5}>
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
