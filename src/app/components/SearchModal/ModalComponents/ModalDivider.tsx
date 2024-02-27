import {AbsoluteCenter, Box, Divider} from "@chakra-ui/react";

const ModalDivider = () => {
  return (
    <Box position='relative' py={5}>
              <Divider/>
              <AbsoluteCenter _dark={{background: "gray.700"}}
                              _light={{background: "white"}}
                              px='4'>
                nebo
              </AbsoluteCenter>
            </Box>
  )
}

export default ModalDivider