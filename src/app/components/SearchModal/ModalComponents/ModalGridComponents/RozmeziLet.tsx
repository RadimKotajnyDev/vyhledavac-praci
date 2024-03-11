'use client'
import React, {useEffect, useState} from "react";
import {
  Box,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack, Skeleton,
  Text
} from "@chakra-ui/react";
import {Field, FormikErrors, FormikValues} from "formik";
import {server_address} from "@/app/configs/apiConfig";
import axios from "axios";

interface RozmeziLetInterface {
  values: FormikValues;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  errors: FormikErrors<any>;
  oldestYear: number,
  isLoading: boolean
}

const RozmeziLet = (props: RozmeziLetInterface) => {

  const {values, setFieldValue, errors, oldestYear, isLoading} = props

  const todayYear = new Date().getFullYear()


  return (
    <>
      <Box w="full" borderRadius="md"
           p={5} border="1px" _dark={{borderColor: "gray.600"}}
           _light={{borderColor: "gray.200"}}>
        <Text fontSize="xl" mb={2}>Rozmezí let</Text>
        <Flex gap={5}>
          <Field name="rozmezi_let[0]" as={Input} borderColor={errors.rozmezi_let ? "red.500" : undefined}
                 type="number"
                 placeholder={`min ${oldestYear}`}/>
          <Field name="rozmezi_let[1]" as={Input} borderColor={errors.rozmezi_let ? "red.500" : undefined}
                 type="number"
                 placeholder={`max ${todayYear}`}/>
        </Flex>
        <Box px={3} mt={4}>
          <Skeleton isLoaded={!isLoading}>
            <RangeSlider colorScheme="green"
                         aria-label={['min', 'max']} defaultValue={[values?.rozmezi_let[0], values?.rozmezi_let[1]]}
                         min={oldestYear} max={todayYear}
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
          </Skeleton>
        </Box>
      </Box>
    </>
  );
}

export default RozmeziLet