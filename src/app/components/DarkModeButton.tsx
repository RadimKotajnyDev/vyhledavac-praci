import {Button, useColorMode} from "@chakra-ui/react";
import {MdOutlineDarkMode, MdOutlineWbSunny} from "react-icons/md";

export default function DarkModeButton() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Button
      variant="none"
      onClick={toggleColorMode}
      h="fit-content"
      w="fit-content"
      px={0}
    >
      {colorMode === "dark" ? <MdOutlineDarkMode fill="white" size={25}/> : <MdOutlineWbSunny fill="white" size={25}/>}
    </Button>
  );
}
