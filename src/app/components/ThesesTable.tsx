import {
  Button,
  Center,
  DarkMode,
  Flex,
  Icon, IconButton, Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import {IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {APIData, PraceType} from "@/app/configs/ApiDataTypes";
import {NextRouter} from "next/router";


//fixme: too lazy to fix this shit
interface ThesesTableInterface {
  slugify: (str: string | undefined) => string;
  TableHeads: {apiNames: string[], czechNames: string[]},
  setSortBy: (value: string | ((prevVar: string) => boolean)) => void;
  setSortDirDown: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  isButtonHidden: boolean,
  bgColor: string,
  router: NextRouter,
  pageNumber: number,
  sortBy: string,
  sortDirDown: boolean,
  loadMore: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  apiData: APIData[],
  setLoadMore: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setPageNumber: (value: number) => void;
  hideButton: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  maxPageNumber: number
}

const ThesesTable = (props: any) => {

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
    apiData,
    setLoadMore,
    setPageNumber,
    hideButton,
    maxPageNumber
  } = props

  return (
    <Flex color="white" w="full" minH="80vh"
          flexDir="column"
          px={{base: 0, md: 3}}
      //justifyContent="space-around"
          justifyItems="center"
          placeItems="center"
    >
      <DarkMode>
        <TableContainer //bg="rgba(255, 255, 255, 0.1)"
          bgColor={bgColor}
          w="full"
          maxH="80vh" overflowY="auto"
          //boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
          //backdropFilter="blur( 4px )"
          borderRadius="xl"
          p={8}
          m={4}>
          <Table
            size={{base: "sm", md: "lg"}}
            variant={{base: "striped", md: "unstyled"}} colorScheme="blackAlpha">
            <Thead>
              <Tr>
                {TableHeads.czechNames.map((item: string, index: number) => (
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
                      setPageNumber((prevState: number) => prevState + 1)
                    }}>načíst další</Button>
          </Center>
        </TableContainer>
        <Stack direction="row" alignItems="center" position="absolute" bottom={6}
               hidden={maxPageNumber == 1} zIndex={5}>
          <IconButton isDisabled={pageNumber == 1 || loadMore} onClick={() => {
            if (pageNumber > 1) {
              if (loadMore) {
                setLoadMore(false)
                setPageNumber(1)
              } else {
                hideButton(true)
                setPageNumber((prevState: number) => prevState - 1)
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
                setPageNumber((prevState: number) => prevState + 1)
              }
            }
          }}
                      aria-label="next-page" icon={<IoIosArrowForward/>}/>
        </Stack>
      </DarkMode>
    </Flex>
  )
}

export default ThesesTable