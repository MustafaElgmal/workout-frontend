import axios from "axios";
import { Base_Url } from "../constants";
import { userCreate } from "../types";

export const createUser=async(user:userCreate)=>{
    try{
        const res=await axios.post("/api/users")
        console.log(res)
    }catch(e){
        console.log(e)
    }

}