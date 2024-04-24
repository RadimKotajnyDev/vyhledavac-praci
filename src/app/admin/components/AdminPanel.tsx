'use client'
import CreateThesis from "@/app/admin/components/CreateThesis";
import {Box, Flex} from "@chakra-ui/react";

const AdminPanel = () => {
  return (
    <Flex w="full" h="100vh">
      <CreateThesis />
    </Flex>
  )
}

export default AdminPanel