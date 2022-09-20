import { userType } from "./../../../types";
import type { NextApiRequest, NextApiResponse } from "next";
import { signInValidation } from "../../../utils/validations";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

type Data = {
  message?: string;
  error?: string;
  errors?: { error: string }[];
  user?:User;
};

export default async function handlerSignIn(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      try {
        const errors = await signInValidation(req.body);
        if (errors.length > 0) {
          return res.status(400).json({ errors });
        }
        const { email, password }: { email: string; password: string } =
          req.body;
        const user = await prisma.user.findFirst({
          where: { email, password },
        });
        if (!user) {
          return res.status(404).json({ message: "User Not found!" });
        }
        res.json({ user });
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
