import React, { useState } from "react";
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Box, Text } from "@chakra-ui/react";

export const YearRange = () => {
  const [value, setValue] = useState([1921, new Date().getFullYear()]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <RangeSlider colorScheme="green"
      aria-label={['min', 'max']} defaultValue={[1921, new Date().getFullYear()]}
                 min={1921} max={new Date().getFullYear()}
                 onChange={handleChange} value={value}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
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
  );
}
