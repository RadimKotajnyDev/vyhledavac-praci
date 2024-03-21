'use client'
import {logout} from "@/app/login/actions";
import {Button} from "@chakra-ui/react";

export const Logout = () => {
  return (
    <Button onClick={() => logout()}>logout</Button>
  )
}