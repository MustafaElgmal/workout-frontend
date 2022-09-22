import { Log } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { LogCreateType } from "../../../types";
import { LogValidation } from "../../../utils/validations";

type Data = {
  message?: string;
  error?: string;
  errors?: { error: string }[];
  log?: Log 
};

export default async function handlerUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      try {
        const errors = LogValidation(req.body);
        if (errors.length > 0) {
          return res.status(400).json({ errors });
        }
        const {
          step,
          userReps,
          userWeights,
          workoutlineId,
          userId,
        }: LogCreateType = req.body;
        const log = await prisma.log.create({
          data: { step, userReps, userWeights, WorkoutlineId:workoutlineId, userId },
        });
        res.status(201).json({log})
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ message: "Api not found!" });
  }
}
