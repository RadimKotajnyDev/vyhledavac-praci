'use client'
import {signOut} from "@/app/login/actions";
import {Button} from "@chakra-ui/react";

export const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()}>Sign out</Button>
  )
}