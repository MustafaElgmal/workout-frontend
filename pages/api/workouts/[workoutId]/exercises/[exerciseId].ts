import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";
import { Exercise } from "@prisma/client";

type Data = {
  message?: string;
  error?: string;
  exercise?: Exercise;
};

export default async function handlerExercises(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      try {
        const { exerciseId, workoutId } = req.query;
        if (!exerciseId) {
          return res.status(400).json({ message: "exerciseId is required!" });
        }
        const exercise = await prisma.exercise.findFirst({
          where: {workoutlines:{some:{exerciseId : +exerciseId,workoutId:+workoutId!}} },
        });
        if (!exercise) {
          return res.status(400).json({ message: "exerciseId is not exist!" });
        }
        res.json({ exercise });
      } catch (error) {
        res.status(500).json({ error: "Server is down" });
      }

      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
