import React from "react";
import { AuthForm } from "./components/AuthForm";
import {Box, Flex} from "@chakra-ui/react";

export default function page() {
	return (
		<Flex justifyItems="center" alignItems="center" h="screen"
		//flex justify-center items-center h-screen
		>
			<Box w={96}>
				<AuthForm />
			</Box>
		</Flex>
	);
}
