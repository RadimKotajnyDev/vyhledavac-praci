import {Box, Image, Spinner} from "@chakra-ui/react";
import React, { useEffect, useState, Suspense } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));
export const ThreeDobject = () => {
  const [isPotatoPC, setPotatoPC] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setPotatoPC(true);
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <Box w="500px" h="600px" display={{ base: "none", md: "block" }}>
      {isPotatoPC ? (
        <Image
          src="/zarovka.png"
          alt="zarovka"
          w="100%"
          h="100%"
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Suspense fallback={<Spinner />}>
          <Spline
          onLoad={() => {
            setIsLoading(false);
          }}
          scene="https://prod.spline.design/bbH-SUXSTkvFd2Gq/scene.splinecode"
        />
        </Suspense>
      )}
    </Box>
  );
};
