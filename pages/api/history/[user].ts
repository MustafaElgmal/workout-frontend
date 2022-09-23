import { Log } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type Data = {
  error?: string;
  message?: string;
  logs?:Log[]
};

export default async function handlerUserProfile(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      try {
        const { day } = req.headers;
        const { user } = req.query;
        // if (!day) {
        //   return res.status(400).json({ error: "Day is required as header!" });
        // }
        if (!user) {
          return res.status(400).json({ error: "Day is required as params!" });
        }
        const logs = await prisma.log.findMany({
          where: { userId: user as string },
          include: { workoutline: { include: { workout: true,exercise:true } } },
        });
        res.json({logs})
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }

      break;

    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
