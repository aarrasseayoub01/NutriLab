import prisma from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function nutrients(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method === "PUT") {
    const data = req.body;
    if (session) {
      data.userId = session.user.id;
    } else {
      data.userId = req.headers.userid;
    }
    try {
      
      const user = await prisma.Nutrients.upsert({
        where: {
          userId: data.userId,
        },
        update: data,
        create: data,
      });

      res.status(200).json(user);
    } catch (e) {
      res.status(401).json({ message: "Wrong Info" });
    }
  }
  if (req.method === "GET") {
    let userid;
    if (session) {
      userid = session.user.id;
    } else {
      userid = req.headers.userid;
    }

    try {
      const user = await prisma.Nutrients.findUnique({
        where: {
          userId: userid,
        },
      });
      res.status(200).json(user);
    } catch (e) {
      res.status(401).json({ message: "No Nutri Info" });
    }
  }
}
