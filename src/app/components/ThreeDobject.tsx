import {Box} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";

export const ThreeDobject = () => {
  return (
    <Box w="500px" h="700px" display={{base: "none", md: "block"}}>
      <Spline scene="https://prod.spline.design/bbH-SUXSTkvFd2Gq/scene.splinecode"/>
    </Box>
  )
}