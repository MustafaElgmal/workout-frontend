import { userCreate, userType } from "./../../../types";
import type { NextApiRequest, NextApiResponse } from "next";
import { userValidation } from "../../../utils/validations";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

type Data = {
  message?: string;
  error?: string;
  errors?: { error: string }[];
  user?: User
};

export default async function handlerUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      try {
        const errors = await userValidation(req.body);
        if (errors.length > 0) {
          return res.status(400).json({ errors });
        }
        const {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          height,
          weight,
        }: userCreate = req.body;
        const user = await prisma.user.create({
          data:{
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          height,
          weight
        }
        });
      
        
        res.json({user});
      } catch (e) {
        console.log(e)
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
