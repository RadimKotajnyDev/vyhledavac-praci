'use client'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';
import {login, signup} from './actions';
import React from "react";
import {useVyhledanePrace} from "@/app/configs/useVyhledanePrace";

const LoginForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await login(formData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email"/>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Heslo</FormLabel>
        <Input type="password" name="password"/>
      </FormControl>
      <Button mt={4} colorScheme="green" type="submit">
        Přihlásit se
      </Button>
    </form>
  );
};

const SignupForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await signup(formData);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email"/>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Heslo</FormLabel>
        <Input type="password" name="password"/>
      </FormControl>
      <Button mt={4} colorScheme="green" type="submit">
        Registrovat se
      </Button>
    </form>
  );
};

const AuthPage: React.FC = () => {

  const { bgColor } = useVyhledanePrace()

  return (
    <>
      <Flex w="full" justifyContent="center" mt={{base: "10", xl: "20"}} textColor="white">
        <Box w="fit-content" p={4} bgColor={bgColor} borderRadius="xl">
          <Tabs colorScheme="green">
            <TabList>
              <Tab>Přihlášení</Tab>
              <Tab>Registrace</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading>Přihlášení</Heading>
                <LoginForm/>
              </TabPanel>
              <TabPanel>
                <Heading>Registrace</Heading>
                <Text my={2} fontWeight="light" color="gray.300" fontSize="sm" maxW="15rem">Pokud jste student, je pro vás registrace <u>zatím</u> zbytečná.</Text>
                <SignupForm/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default AuthPage;
