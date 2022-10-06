import { Log } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import { LogCreateType } from "../../../../types";
import { LogValidation } from "../../../../utils/validations";
import { upload } from "../../../../middlewares/fileUpload";

type Data = {
  message?: string;
  error?: string;
  imageUr?: string;
};
export const config = {
  api: {
    bodyParser: false,
  },
};
const singleUpload = upload.single("image");

export default async function handlerUser(req: any, res: any) {
  switch (req.method) {
    case "POST":
      const { id } = req.query;
      if (!id) {
        return res.status(406).send({ error: "Please write Id as params!" });
      }

      singleUpload(req, res, async (err) => {
        if (err) {
          return res.status(406).send({ error: err.message });
        }

        if (!req.file) {
          return res.status(404).send({ error: "No content!" });
        }

        try {
          const updatedUser = await prisma.user.update({
            where: { id: id as string },
            data: {
              imageUrl: req.file.location,
              imageAlt: "Profile",
            },
          });
          res.status(201).json({ profile:updatedUser });
        } catch (e) {
          res.status(500).json({ error: "Server is down!" });
        }
      });
      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
