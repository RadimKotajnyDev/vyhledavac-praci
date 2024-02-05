import {Box, Button, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Box
        inset={0}
        position={"absolute"}
        h="100vh" // Set the height to 100% of the viewport
        w="100%"  // Set the width to 100%
      >
        <Image src={"/topography.svg"} alt={"topography"}
               fill={true} objectFit={"cover"} objectPosition={"center"}
        />
      </Box>
      <Box
        w="100%"
        h="90%"
        borderRadius="lg"
        boxShadow="lg"
        borderColor="rgba(255, 255, 255, 0.2)" // Set the alpha value to make it less visible
        borderWidth="1px"
        bg="rgba(255, 255, 255, 0.05)" // Adjust the alpha value to control visibility
        backdropFilter="blur(10px)"
        display="flex"
        flexDir="column"
        placeItems={"center"}
        p={5}
        m={10}
        gap={3}
      >

        <Heading
          fontSize="6xl"
        >
          Úložiště maturitních prací
        </Heading>
        <Text fontSize="3xl">
          úžasné nápady, spousta práce, zajímavé prezentace
        </Text>
        <Text fontSize="4xl">
          Stačí jen hledat
        </Text>
        <Button colorScheme='teal' variant='outline'>
          Filtrovat
        </Button>
      </Box>
    </>
  );
}
