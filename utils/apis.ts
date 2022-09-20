import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { Base_Url } from "../constants";
import { userCreate } from "../types";

export const createUser = async (user: userCreate, router: NextRouter) => {

  try {
  
    
    const res = await axios.post("/api/users");
    
    
    router.push("/");
  } catch (e: any) {
    console.log(e);
    
    if (e.status !== 500) {
      alert(e.response.data.error[0]);
    } else {
      console.log(e);
    }
  }
};

export const signInWithEmail= async({email,password}:{email:string,password:string},router:NextRouter)=> {
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    })
    if(user){
        router.push('/')
    }else{
        router.push('/signin')
    }
  }
