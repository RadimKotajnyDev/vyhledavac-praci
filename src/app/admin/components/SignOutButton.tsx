'use client'
import {signout} from "@/app/login/actions";
import {Button} from "@chakra-ui/react";

export const SignOutButton = () => {
  return (
    <Button onClick={() => signout()}>Sign out</Button>
  )
}