// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { workoutType } from "../../../types";
import { PrismaClient, Workout } from "@prisma/client";
const prisma = new PrismaClient();

type Data = {
    message?: string;
    error?: string;
    errors?: { error: string }[];
    workouts?: Workout[];
};

export default async function handlerWorkout(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "GET":
            try {
                const workouts = await prisma.workout.findMany()
            res.json({workouts});
            } catch (error) {
                res.status(500).json({ error:"Server is down" });                
            }
            
            break;
        default:
            res.status(500).json({ message: "Api not found!" });
    }
}
