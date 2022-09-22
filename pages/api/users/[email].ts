import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type Data = {
  error?: string;
  message?: string;
  profile?: User;
};

export default async function handlerUserProfile(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      try {
        const { email } = req.query;

        if (!email) {
          return res.status(500).json({ message: "Email is required!" });
        }
        const profile = await prisma.user.findFirst({
          where: { email: email as string },
        });
        if (!profile) {
          return res.status(404).json({ message: "user is not found!" });
        }
        res.json({ profile });
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }

      break;

    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
