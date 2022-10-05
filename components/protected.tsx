import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React from "react";
import SignIn from "../pages/signin";
import { AppProps } from "../types";

const Protected = ({ children }: any) => {
  const { user } = useUser();
  const router = useRouter();
  console.log(user);
  
  return (
    <div>{user! == null || router.asPath === "/signup" ? children : <SignIn />}</div>
  );
};

export default Protected;
