'use client'
import {Box, Button, Divider, Grid, Heading, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Image} from "@chakra-ui/next-js";

type APIData = {
  id: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
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
           p={8}
           m={4}>
        <Grid gridTemplateColumns="repeat(2, 1fr)">
          <Box boxSize='sm'>
            <Image src='' alt='Dan Abramov' fill/>
          </Box>
          <Box>
            <Heading>{data.tema ?? "Chybí název"}</Heading>
            <Divider/></Box>
          <Box></Box>
        </Grid>

      </Box>
    </Box>
  );
}
