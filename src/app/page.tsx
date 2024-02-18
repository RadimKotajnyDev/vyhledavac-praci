'use client'
import {
  Box, Flex, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import SearchModal from "@/app/components/SearchModal";
import PageText from "@/app/components/PageText";
import {useAPIData} from "@/app/providers/APIdataProvider";
import {ThreeDobject} from "@/app/components/ThreeDobject";

export default function Home() {


  const {apiData, setAPIData} = useAPIData();

  if (Array.isArray(apiData)) {
    return (
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
        <TableContainer bg="rgba(255, 255, 255, 0.05)"
                        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
                        backdropFilter="blur( 4px )"
                        borderRadius="xl"
                        p={8}
                        m={4}>
          <Table variant='simple'>
            <TableCaption>Seznam maturitních prací</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Školní rok</Th>
                <Th>Název práce (téma)</Th>
                <Th>Obor</Th>
                <Th>Předmět</Th>
                <Th>Autor</Th>
                <Th>Vedoucí</Th>
              </Tr>
            </Thead>
            <Tbody>
              {apiData.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.id}</Td>
                  <Td>{data.skolni_rok}</Td>
                  <Td>{data.tema}</Td>
                  <Td>{data.obor}</Td>
                  <Td>{data.predmet}</Td>
                  <Td>{data.jmeno_prijmeni}</Td>
                  <Td>{data.vedouci}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    )
  } else return (
    <>
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
        <Flex flexDir="column" textAlign="left" gap={2}>
          <PageText/>
          <SearchModal/>
        </Flex>
        {/*
        <ThreeDobject/>
         */}
      </Box>
    </>
  );
}
