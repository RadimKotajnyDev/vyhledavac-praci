'use client'
import {signOut} from "@/app/login/actions";
import {useEffect} from "react";

const SignOut = () => {

  useEffect(() => {
    async function signOutFun() {
      await signOut()
    }
    signOutFun()
  }, []);

  return <p>Odhlašuji.</p>
}

export default SignOut