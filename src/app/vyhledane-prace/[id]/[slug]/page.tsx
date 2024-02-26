'use client'
import {Box, Button, Divider, Flex, Grid, GridItem, Heading, Spinner, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Image} from "@chakra-ui/react";

type APIData = {
  id: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string,
  prakticka_cast?: string,
  obsah?: string
};

export default function Page({params}: { params: { id: number, slug: string } }) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<APIData | null>();

  useEffect(() => {
    const storedData = sessionStorage.getItem('apiData');
    if (storedData) {
      const storedDataParse = JSON.parse(storedData) as APIData[];
      const currentData = storedDataParse.find(item => item.id === Number(params.id));
      setIsLoading(false)
      if (currentData) {
        setData(currentData);
      }
    }
  }, [params.id]);

  useEffect(() => {
    console.log(data)
  }, [data]);


  if (isLoading) {
    return (
      <Box color="white" w="full" justifyContent="center" gap={10}
           minH="80vh" flexDir="column" placeItems="center" display="flex">
        <Spinner size='xl'/>
        <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
      </Box>
    )
  } else if (typeof data == "undefined" || data === null) {
    return (
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around"
           justifyItems="center" placeItems="center"
           display="flex">
        <Heading>Zadaná práce neexistuje</Heading>
      </Box>
    )
  } else return (
    <Box color="white" w="full"
         minH="80vh" justifyContent="space-around"
         justifyItems="center" placeItems="center"
         display="flex">
      <Box bg="rgba(255, 255, 255, 0.1)"
           boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
           backdropFilter="blur( 4px )"
           borderRadius="xl"
           justifyItems="center"
           p={8}
           m={4}>
        <Grid
          h="full"
          justifyContent="center"
          alignItems="center"
          gap={5}
          gridTemplateColumns={{base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)"}}>
          <GridItem boxSize='400px'>
            <Box boxSize='500px'>
              <Image
                m={1}
                borderRadius="xl"
                src='https://media.istockphoto.com/id/185244309/photo/work-in-progress.jpg?s=612x612&w=0&k=20&c=ECQ9StWhFTfFjWg_yt8ITEyAuZpRLVV8akD20jagc-Y='
                alt='Random image from stock photo'
                objectFit="cover"
              />
            </Box>
          </GridItem>
          <GridItem boxSize="lg" justifySelf="center" h="full">
            <Box>
              <Heading fontSize="3xl">{data.tema ?? "Chybí název"}</Heading>
              <Divider/>
            </Box>

            <Flex flexDir="row" justifyContent="space-between" w="full" my={1}>
              <Text fontWeight="200">Autor: {data.jmeno_prijmeni}</Text>
              <Text fontWeight="200">Vedoucí: {data.vedouci}</Text>
            </Flex>

            <Flex flexDir="row" justifyContent="space-between" w="full" my={1}>
              <Text fontWeight="200">{data.skolni_rok}</Text>
              <Text fontWeight="200">Obor:&nbsp;
                <span style={{textTransform: "uppercase"}}>{data.obor}</span>
              </Text>
            </Flex>
            <Divider my={2}/>
            <Flex flexDir="column">
              <Box>
                <Text>Praktická část</Text>
                <Text fontWeight="200">{data.prakticka_cast}</Text>
              </Box>
              <Divider my={2}/>
              <Box>
                <Text>Obsah práce</Text>
                <Text fontWeight="200">{data.obsah}</Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
