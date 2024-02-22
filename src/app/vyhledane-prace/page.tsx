'use client'
import {
  Box,
  Button,
  DarkMode,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

type APIData = {
  id?: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
};

function createSlug(str: string | undefined) {
  if(typeof str === 'undefined') {
    return ""
  }
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}


const VyhledanePrace = () => {
  const router = useRouter()
  const [apiData, setAPIData] = useState<APIData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const storedData = sessionStorage.getItem('apiData'); // Change to sessionStorage
    if (storedData) {
      setAPIData(JSON.parse(storedData));
      setIsLoading(false)
      //console.log(storedData)
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
    if (Array.isArray(apiData)) {
      return (
        <Box color="white" w="full"
             minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
          <DarkMode>
            <TableContainer bg="rgba(255, 255, 255, 0.1)"
                            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
                            backdropFilter="blur( 4px )"
                            borderRadius="xl"
                            p={8}
                            m={4}>
              <Table variant='simple'>
                <TableCaption>Seznam maturitních prací</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Školní rok</Th>
                    <Th>Název práce (téma)</Th>
                    <Th>Obor</Th>
                    <Th>Předmět</Th>
                    <Th>Autor</Th>
                    <Th>Vedoucí</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {apiData && apiData.map((data: APIData, index: number) => (
                    <Tr key={index} cursor="pointer" onClick={() => router.push(`/vyhledane-prace/${data.id}/${createSlug(data.tema)}`)}>
                      <Td>{data.skolni_rok}</Td>
                      <Td>{data.tema}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.obor}</Td>
                      <Td style={{textTransform: "uppercase"}}>{data.predmet}</Td>
                      <Td>{data.jmeno_prijmeni}</Td>
                      <Td>{data.vedouci}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
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
