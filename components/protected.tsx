import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React from "react";
import SignIn from "../pages/signin";

const Protected = ({ children }: any) => {
  const { user } = useUser();
  console.log("user");
  const router = useRouter();
  return (
    <div>
      {user !== null ||
      router.asPath === "/signup" ||
      router.asPath === "/forgetPasswordCode" ? (
        children
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Protected;
