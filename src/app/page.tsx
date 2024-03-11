'use client'
import {Box, Flex,} from '@chakra-ui/react'
import HomePageButtons from "@/app/components/HomePageButtons";
import PageText from "@/app/components/PageText";
import {ThreeDobject} from "@/app/components/ThreeDobject";

export default function Home() {
  return (
    <>
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
        <Flex flexDir="column" textAlign="left" gap={2}>
          <PageText/>
          <HomePageButtons/>
        </Flex>
        <ThreeDobject/>
      </Box>
    </>
  );
}
