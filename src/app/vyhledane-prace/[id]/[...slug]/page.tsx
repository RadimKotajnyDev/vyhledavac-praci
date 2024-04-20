'use client'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading, IconButton,
  Spinner,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {server_address} from "@/app/configs/apiConfig";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import {SlideData} from "@/app/components/ImageSlider/SlideData";
import Link from "next/link";
import {IoIosBug} from "react-icons/io";

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

  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(45, 55, 72, 0.25)");


  const toast = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<APIData | null>();

  useEffect(() => {
    function getDataById() {
      axios.get<APIData>(`${server_address}/search_task_by_id/${params.id}`)
        .then(r => {
          setData(r.data)
          setIsLoading(false)
        })
        .catch((e) => toast({
          title: e,
          status: "error",
          isClosable: true,
        }))
    }

    const storedData = sessionStorage.getItem('apiData');
    if (storedData) {
      const storedDataParse = JSON.parse(storedData) as APIData[];
      const currentData = storedDataParse.find(item => item.id === Number(params.id));
      if (currentData) {
        setData(currentData);
        setIsLoading(false)
      } else {
        getDataById()
      }
    } else {
      getDataById()
    }
  }, [params.id])

  /*
  useEffect(() => {
    console.log(data)
  }, [data]);
   */


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
         minH="80vh"
         justifyContent="space-around"
         justifyItems="center" placeItems="center"
         overflowY="scroll"
         display="flex">
      <Box bgColor={bgColor}
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
          placeItems="center"
          gap={5}
          gridTemplateColumns={{base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)"}}>
          <GridItem boxSize="full">
            <Box boxSize="full" p={4} color="white">
              <ImageSlider slides={SlideData}/>
            </Box>
          </GridItem>
          <GridItem boxSize="full" justifySelf="center" h="full">
            <Box>
              <Heading fontSize="3xl" mb={5}>{data.tema ?? "Chybí název"}</Heading>
              <Divider/>
            </Box>

            <Flex flexDir="row" justifyContent="space-between" w="full" my={3}>
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
      <Box pos="fixed" bottom={5} left={5}>
        <Link href="https://forms.gle/7gJK7P3PSxgAknCg7" passHref target="_blank">
          <IconButton aria-label="report-a-bug-button" colorScheme="red"
                      icon={<IoIosBug/>} onClick={() => console.log("reported.")}/>
        </Link>
      </Box>
    </Box>
  );
}
