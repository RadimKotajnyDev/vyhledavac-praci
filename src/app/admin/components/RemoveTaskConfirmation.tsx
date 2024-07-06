import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Flex,
    IconButton,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import React from "react";
import {removeTask} from "@/app/admin/actions";
import {AiOutlineDelete} from "react-icons/ai";
import {PraceType} from "@/app/configs/types/ApiDataTypes";

type Props = {
    data: PraceType
}

export const RemoveTaskConfirmation = ({data}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <>
            <IconButton onClick={onOpen} colorScheme="red" aria-label='remove-task' icon={<AiOutlineDelete />} />

            <AlertDialog
                isOpen={isOpen}
                // @ts-ignore
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Smazání práce
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <p>Opravdu chcete smazat</p>
                            <br/>
                            <Text fontWeight="bold">{data.tema}</Text>
                            <br/>
                            <Flex>od&nbsp;<Text fontWeight="bold">{data.jmeno_prijmeni}</Text> ?</Flex>
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button // @ts-ignore
                                ref={cancelRef} onClick={onClose}>
                                Zrušit
                            </Button>
                            <Button colorScheme='red' ml={3}
                                    onClick={() => {
                                        onClose
                                        removeTask(data.id)
                                    }}
                            >
                                Smazat
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}