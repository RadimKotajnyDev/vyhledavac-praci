import {
  DarkMode,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosBug,
  IoMdArrowDropdown,
  IoMdArrowDropup
} from "react-icons/io";
import {APIData, PraceType} from "@/app/configs/types/ApiDataTypes";
import {NextRouter} from "next/router";
import Link from "next/link";
import {RemoveTaskConfirmation} from "@/app/admin/components/RemoveTaskConfirmation";

//fixme: too lazy to fix this shit
interface ThesesTableInterface {
  isAdmin: true | undefined,
  slugify: (str: string | undefined) => string;
  TableHeads: { apiNames: string[], czechNames: string[] },
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
    isAdmin,
    NextPage,
    PreviousPage,
    TableTop,
    handleBackClick,
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
    <Flex color="white" w="full" //minH="80vh"
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
          maxH="80vh"
          overflowY="auto"
          //boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
          //backdropFilter="blur( 4px )"
          borderRadius="xl"
          p={8}
          m={4}>
          <Table
            // @ts-ignore
            size={{base: "sm", md: "lg"}}
            ref={TableTop}
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
                {isAdmin? <Th></Th> : ""}
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
                >
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)}>{data.skolni_rok}</Td>
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)} style={{whiteSpace: 'normal'}}>{data.tema}</Td>
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)} style={{textTransform: "uppercase"}}>{data.obor}</Td>
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)} style={{textTransform: "uppercase"}}>{data.predmet}</Td>
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)}>{data.jmeno_prijmeni}</Td>
                  <Td onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)}>{data.vedouci}</Td>
                  {isAdmin? <Td>
                    <RemoveTaskConfirmation data={data} />
                  </Td> : null}
                </Tr>
              ))}
            </Tbody>
          </Table>
          {/*
          <Center>
              <Button mt={5} display={isButtonHidden ? "none" : "block" || true ? "none" : "none"}
                    onClick={() => {
                      setLoadMore(true)
                      setPageNumber((prevState: number) => prevState + 1)
                    }}>načíst další</Button>
          </Center>
          */}
        </TableContainer>
        <Grid
          templateColumns="repeat(3, 1fr)"
          position="absolute" bottom={6}
          justifyContent="space-between"
          w="full"
          //hidden={maxPageNumber == 1}
          zIndex={5}>
          <GridItem justifySelf="start" pl={5}>
            <Link href="https://forms.gle/7gJK7P3PSxgAknCg7" passHref target="_blank">
              <IconButton aria-label="report-a-bug-button" colorScheme="red"
                        icon={<IoIosBug />} onClick={() => console.log("reported.")}/>
            </Link>
          </GridItem>
          <GridItem justifySelf="center">
            <Stack
              direction="row" alignItems="center">
              <IconButton isDisabled={pageNumber == 1 || loadMore} onClick={NextPage}
                          aria-label="previous-page" icon={<IoIosArrowBack/>}/>
              <Text>{loadMore ? "⚡" : `${pageNumber} / ${maxPageNumber}`}</Text>
              <IconButton isDisabled={pageNumber == maxPageNumber || loadMore} onClick={PreviousPage}
                          aria-label="next-page" icon={<IoIosArrowForward/>}/>
            </Stack>
          </GridItem>
          <GridItem justifySelf="end" pr={5}>
            <IconButton aria-label="back-on-top" colorScheme="green"
                        icon={<IoIosArrowUp/>} onClick={handleBackClick}/>
          </GridItem>

        </Grid>
      </DarkMode>
    </Flex>
  )
}

export default ThesesTable