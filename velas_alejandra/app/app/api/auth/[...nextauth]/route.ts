export const dynamic = "force-dynamic";

import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // tus providers de auth
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };