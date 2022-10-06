import { prisma } from './../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from "next";
import sgmail from "@sendgrid/mail";
sgmail.setApiKey('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');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const { email }: { email: string } = req.body;
        if(!email){
          return res.status(400).json({message:'Email is required!'})
        }
        const user=await prisma.user.findFirst({where:{email}})
        if(!user){
          return res.status(404).json({message:'Email is not found!'})
        }
        await sgmail.send({
          to: email,
          from: "mostafaelgmal36@gmail.com",
          subject: "ForgetPassword",
          html: `<div>https://jwt-coral.vercel.app</div>`,
        });
        res.status(201).json({ message: "Email is send !" });
      } catch (e) {
        console.log(e)
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ error: "Api not found" });
  }
}
