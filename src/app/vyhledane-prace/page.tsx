'use client'
import {
  Box,
  Button,
  Center,
  DarkMode,
  Flex,
  Icon,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast
} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {IoMdArrowDropdown} from "react-icons/io";
import {useSearchFunctions} from "@/app/configs/useSearchFunctions";

type APIData = {
  id?: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
  concat?(newData: any): APIData | undefined;
};

const TableHeads: string[] = [
  "Školní rok",
  "Název práce (téma)",
  "Obor",
  "Předmět",
  "Autor",
  "Vedoucí"
]

function slugify(str: string | undefined): string {

  if (typeof str === "undefined") {
    return ""
  }

  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  const charMap: { [key: string]: string } = {
    'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o',
    'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z'
  };

  str = str.replace(/[^\u0000-\u007E]/g, function (a) {
    return charMap[a] || a;
  });

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
  return str;
}


const VyhledanePrace = () => {
  const router = useRouter()
  const toast = useToast()
  const [apiData, setAPIData] = useState<APIData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [isButtonHidden, hideButton] = useState<boolean>(false)

  const {getPraceFromPage} = useSearchFunctions()

  useEffect(() => {
    async function fetchNextPage() {
      try {
        //console.log(pageNumber)
        const newData = await getPraceFromPage(pageNumber);
        if (newData.length === 0) {
          hideButton(true)
          toast({
            title: "Načteno maximálně prací",
            status: "info",
            isClosable: true,
            duration: 1500
          })
        }
        setAPIData(prevData => prevData?.concat(newData));
        sessionStorage.setItem('apiData', JSON.stringify(apiData));
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
      }
    }

    if (pageNumber > 1) {
      fetchNextPage()
    }
  }, [pageNumber]);

  function loadMoreData() {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }


  useEffect(() => {
    if (pageNumber === 1) {
      const storedData = sessionStorage.getItem('apiData');
      if (storedData) {
        setAPIData(JSON.parse(storedData));
        setIsLoading(false)
        //console.log(storedData)
      }
    }
  }, []);

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
        <Box color="white" w="full" minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center"
             display="flex">
          <DarkMode>
            <TableContainer bg="rgba(255, 255, 255, 0.1)"
                            maxH="80vh" overflowY="auto"
                            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
                            backdropFilter="blur( 4px )"
                            borderRadius="xl"
                            p={8}
                            m={4}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    {TableHeads.map((item, index) => (
                      <Th key={index}>
                        <Flex>
                          <Text>{item}</Text>
                          <Icon as={IoMdArrowDropdown} boxSize={5}></Icon>
                        </Flex>
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {apiData && apiData.map((data: APIData, index: number) => (
                    <Tr key={index} cursor="pointer" _hover={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                        onClick={() => router.push(`/vyhledane-prace/${data.id}/${slugify(data.tema)}`)}>
                      <Td>{data.skolni_rok}</Td>
                      <Td style={{ whiteSpace: 'normal' }}>{data.tema}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.obor}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.predmet}</Td>
                      <Td>{data.jmeno_prijmeni}</Td>
                      <Td>{data.vedouci}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Center>
                <Button mt={5} display={isButtonHidden ? "none" : "block"}
                        onClick={() => {
                          loadMoreData()
                        }}>načíst další</Button>
              </Center>
            </TableContainer>
          </DarkMode>
        </Box>
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
