import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { Base_Url } from "../constants";
import { LogCreateType, userCreate } from "../types";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Log } from "@prisma/client";

export const createUser = async (userr: userCreate, router: NextRouter) => {
  try {
    await supabaseClient.auth.signUp(
      {
        email: userr.email,
        password: userr.password,
      },
      {
        data: {
          name: `${userr.firstName} ${userr.lastName}`,
          age: userr.age,
        },
      }
    );
    const { user, error } = await supabaseClient.auth.signIn({
      email: userr.email,
      password: userr.password,
    });
    const res = await axios.post("/api/users", { ...userr, id: user?.id });
    if (res.status === 201 && userr !== null) router.push("/");
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
export const createLog = async (log: LogCreateType) => {
  try {
    const res = await axios.post("/api/logs", log);
    console.log("Log is created!");
  } catch (e: any) {
    if (e.status !== 500) {
      alert(e.response.data.errors[0].error);
    } else {
      console.log(e);
    }
  }
};
export const signInUser = async (
  userr: { email: string; password: string },
  router: NextRouter
) => {
  try {
    const { user, error } = await supabaseClient.auth.signIn({
      email: userr.email,
      password: userr.password,
    });
    const res = await axios.post("/api/users/signin", userr);

    if (res.status === 200 && user !== null) router.push("/");
    else {
      router.push("/signin");
    }
  } catch (e: any) {
    if (e.status !== 500) {
      if (e.response.status === 404) {
        alert("user not found!");
      } else {
        alert(e.response.data.errors[0].error);
      }
    } else {
      console.log(e);
    }
  }
};

export const getUserProfile = async (email: string, setProfile: Function) => {
  try {
    const res = await axios.get(`${Base_Url}/api/users/${email}`);
    setProfile(res.data.profile);
  } catch (e) {
    console.log(e);
  }
};

export const getLogs=async(userId:string)=>{
  try {
    const res = await axios.get(`${Base_Url}/api/history/${userId}`);
   return res.data.logs
  } catch (e) {
    console.log(e);
  }

}

