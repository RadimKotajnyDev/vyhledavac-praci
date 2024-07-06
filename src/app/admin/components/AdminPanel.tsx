'use client'
import CreateThesis from "@/app/admin/components/CreateThesis";
import {Flex} from "@chakra-ui/react";
import VyhledanePrace from "@/app/vyhledane-prace/page";

const AdminPanel = () => {
    return (
        <Flex w="full" flexDir="column" justifyContent="center" placeItems="center">
            <div>
                <CreateThesis/>
            </div>
            <VyhledanePrace isAdmin={true} />
        </Flex>
    )
}

export default AdminPanel