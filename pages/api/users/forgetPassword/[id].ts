import { forgetPasswordValidation } from "../../../../utils/validations";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

type Data = {
  error?: string;
  updatedUser?: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      const { id } = req.query;
      if (!id) {
        return res.status(406).send({ error: "Please write Id as params!" });
      }

      try {
        const error = forgetPasswordValidation(req.body.password);
        if (error.error !== "") {
          return res.status(400).json({ error: error.error });
        }
        const { password } = req.body;
        const updatedUser = await prisma.user.update({
          where: { id: id as string },
          data: {
            password,
          },
        });
        res.status(201).json({ updatedUser });
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }
      break;

    default:
      res.status(500).json({ error: "Api is not found!" });
  }
}
