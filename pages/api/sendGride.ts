import type { NextApiRequest, NextApiResponse } from "next";
import sgmail from "@sendgrid/mail";
sgmail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const { email }: { email: string } = req.body;
        await sgmail.send({
          to: email,
          from: "reviews6767@gmail.com",
          subject: "ForgetPassword",
          html: `<div></div>`,
        });
        res.status(201).json({ message: "Email is send !" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ error: "Api not found" });
  }
}
