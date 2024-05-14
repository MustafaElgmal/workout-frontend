import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { LogCreateType, userCreate } from "../types";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch } from "@reduxjs/toolkit";
import { setProfile } from "../redux/features/profile";

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
export const getUserProfile = async (id: string, dispatch: Dispatch) => {
  try {
    const res = await axios.get(`/api/users/${id}`);
    dispatch(setProfile(res.data.profile));
  } catch (e) {
    console.log(e);
  }
};

export const addPhoto = async (
  userId: string,
  file: File,
  dispatch: Dispatch
) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post(`/api/users/image/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(setProfile(res.data.profile));
  } catch (e) {
    console.log(e);
  }
};

export const sendForgetPasswordEmai = async (email: string) => {
  try {
    await axios.post(`/api/sendGride`, { email });
    alert("Email is Send");
  } catch (e: any) {
    if (e.response.status === 404) {
      return alert(e.response.data.message);
    }
    console.log(e);
  }
};
