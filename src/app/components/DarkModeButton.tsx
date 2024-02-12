import { Button, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";

export default function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  //TODO: fix size of button

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="none"
        onClick={toggleColorMode}
        h="fit-content"
        w="fit-content"
        p={0}
      >
        {colorMode === "dark" ? (
          <MdOutlineDarkMode fill="white" size={25} />
        ) : (
          <MdOutlineWbSunny fill="white" size={25} />
        )}
      </Button>
    </motion.div>
  );
}
