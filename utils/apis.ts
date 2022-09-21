import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { Base_Url } from "../constants";
import { userCreate } from "../types";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

export const createUser = async (user: userCreate, router: NextRouter) => {
  try {
    await supabaseClient.auth.signUp({
      email: user.email,
      password: user.password,
    });
    const { error } = await supabaseClient.auth.signIn({
      email: user.email,
      password: user.password,
    });
    const res = await axios.post("/api/users", user);
    if (res.status === 201 && !error) router.push("/");
    else {
      router.push("/signin");
    }
  } catch (e: any) {
    if (e.status !== 500) {
      alert(e.response.data.errors[0].error);
    } else {
      console.log(e);
    }
  }
};
