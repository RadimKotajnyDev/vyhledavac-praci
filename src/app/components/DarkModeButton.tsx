import {IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {MdOutlineDarkMode, MdOutlineWbSunny} from "react-icons/md";
import {motion} from "framer-motion";

export default function DarkModeButton() {
  const {colorMode, toggleColorMode} = useColorMode();


  return (
    <motion.div
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
    >
      <IconButton icon={colorMode === "dark" ? (
        <MdOutlineDarkMode fill="white" size={25}/>
      ) : (
        <MdOutlineWbSunny fill="white" size={25}/>
      )}
                  variant="none"

                  onClick={toggleColorMode}
                  h="fit-content"
                  w="fit-content"
                  p={0}
                  size="0"
                  aria-label="change-color-mode">
      </IconButton>
    </motion.div>
  );
}
