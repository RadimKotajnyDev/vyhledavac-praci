import React, {useState} from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text,
  Input, Flex
} from "@chakra-ui/react";

const RozmeziLet = () => {
  const todayDate = new Date().getFullYear()
  const [value, setValue] = useState([1921, todayDate]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };

  // TODO: value[0] cannot be higher than value[1]

  return (
    <>
      <Box w="full" borderRadius="md"
           p={3} border="1px" _dark={{borderColor: "gray.600"}}
                              _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={2}>Rozmezí let</Text>
        <Flex gap={5}>
          <Input value={value[0]}
                 type="number"
                 onChange={(e) => setValue([Number(e.target.value), value[1]])}
                 placeholder='min 1921'/>
          <Input value={value[1]}
                 type="number"
                 onChange={(e) => setValue([value[0], Number(e.target.value)])}
                 placeholder={`max ${todayDate}`}/>
        </Flex>
        <RangeSlider colorScheme="green" mt={4}
                     aria-label={['min', 'max']} defaultValue={[1921, todayDate]}
                     min={1921} max={todayDate}
                     onChange={handleChange} value={value}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack/>
          </RangeSliderTrack>
          <RangeSliderThumb index={0}>
            <Box position="relative">
              <Text position="absolute" mt={1} left="50%" transform="translateX(-50%)">
                {value[0]}
              </Text>
            </Box>
          </RangeSliderThumb>
          <RangeSliderThumb index={1}>
            <Box position="relative">
              <Text position="absolute" mt={1} left="50%" transform="translateX(-50%)">
                {value[1]}
              </Text>
            </Box>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
    </>
  );
}

export default RozmeziLet