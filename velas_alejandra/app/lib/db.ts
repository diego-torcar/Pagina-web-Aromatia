import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  (process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : new PrismaClient({ log: ["query", "error", "warn"] }));

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}