'use client'
import {Box} from '@chakra-ui/react'
import {ThreeDobject} from "@/app/components/ThreeDobject";
import SearchModal from "@/app/components/SearchModal";
import PageText from "@/app/components/PageText";

export default function Home() {

  return (
    <>
      <Box color="white" w="full"
           minH="80vh" justifyContent="space-around" justifyItems="center" placeItems="center" display="flex">
        <Box display="flex" flexDir="column" textAlign="left" gap={2}>
          <PageText />
          <SearchModal />
        </Box>
        {/*
          <ThreeDobject/>
        */}
      </Box>
    </>
  );
}
