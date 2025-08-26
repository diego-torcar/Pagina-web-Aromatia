import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db"; // ✅ usamos el singleton
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// 🚨 Opcional: agrega otros providers si los necesitas

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // puedes agregar más providers aquí
  ],
  secret: process.env.NEXTAUTH_SECRET, // importante que exista en Railway
  session: {
    strategy: "jwt", // o "database" si quieres guardar sesiones en Prisma
  },
  pages: {
    signIn: "/login", // redirige a tu página de login si tienes una
  },
});

export { handler as GET, handler as POST };