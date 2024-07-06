import {Box, Flex, Heading} from "@chakra-ui/react";
import {SignOutButton} from "@/app/admin/components/SignOutButton";

const PermissionDenied = () => {
    return (
        <Box w="full" mt={24}>
            <Heading textAlign="center">Zde nemáte přístup.</Heading>
            <Flex w="full" justifyContent="center">
                <SignOutButton/>
            </Flex>
        </Box>
    )
}
export default PermissionDenied