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
import {Field, FormikFormProps, FormikHandlers, FormikValues} from "formik";

interface RozmeziLetInterface {
  values: FormikValues,
  setFieldValue: any //fix
}

const RozmeziLet = (props: RozmeziLetInterface) => {

  const {values, setFieldValue} = props

  const todayYear = new Date().getFullYear()

  // TODO: value[0] cannot be higher than value[1]


  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={2}>Rozmezí let</Text>
        <Flex gap={5}>
          <Field name="rozmezi_let[0]" as={Input}
                 type="number"
                 placeholder='min 2000'/>
          <Field name="rozmezi_let[1]" as={Input}
                 type="number"
                 placeholder={`max ${todayYear}`}/>
        </Flex>
        <RangeSlider colorScheme="green" mt={4}
                     aria-label={['min', 'max']} defaultValue={[values?.rozmezi_let[0], values?.rozmezi_let[1]]}
                     min={2000} max={todayYear}
          //onChange={handleChange}
          //value={value}
                     onChange={(val) =>
                       setFieldValue("rozmezi_let", val)
                     }
                     value={[values?.rozmezi_let[0], values?.rozmezi_let[1]]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack/>
          </RangeSliderTrack>
          <RangeSliderThumb index={0}>
            <Box position="relative">
              <Text position="absolute" mt={1} left="50%" transform="translateX(-50%)">
                {values.rozmezi_let[0]}
              </Text>
            </Box>
          </RangeSliderThumb>
          <RangeSliderThumb index={1}>
            <Box position="relative">
              <Text position="absolute" mt={1} left="50%" transform="translateX(-50%)">
                {values.rozmezi_let[1]}
              </Text>
            </Box>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
    </>
  );
}

export default RozmeziLet