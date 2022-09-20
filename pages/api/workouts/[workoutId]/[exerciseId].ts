import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import { Exercise } from "@prisma/client";

type Data = {
  message?: string;
  error?: string;
  exercises?: Exercise[];
};

export default async function handlerExercises(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      try {
        const { exerciseId } = req.query;
        if (!exerciseId) {
          return res.status(400).json({ message: "exerciseId is required!" });
        }
        const exercises = await prisma.exercise.findFirst({
          where: { exerciseId },
        });
        res.json({ exercises });
      } catch (error) {
        res.status(500).json({ error: "Server is down" });
      }

      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
