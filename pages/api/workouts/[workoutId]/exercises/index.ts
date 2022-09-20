import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";
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
        const { workoutId } = req.query;
        if (!workoutId) {
          return res.status(400).json({ message: "workoutId is required!" });
        }
        const exercises = await prisma.exercise.findMany({
          where: { workoutId },
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
