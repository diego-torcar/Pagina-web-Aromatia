import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Faltan email o password" });
      }

      const user = await prisma.user.create({
        data: {
          email,
          password,
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error creando usuario" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Método ${req.method} no permitido`);
  }
}