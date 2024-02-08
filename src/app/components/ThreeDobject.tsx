import {Box} from "@chakra-ui/react";

export const ThreeDobject = () => {
  return (
    <Box w="500px" h="700px">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.48/build/spline-viewer.js"></script>
      {/* @ts-ignore */}
      <spline-viewer url="https://prod.spline.design/bbH-SUXSTkvFd2Gq/scene.splinecode"></spline-viewer>
    </Box>
  )
}