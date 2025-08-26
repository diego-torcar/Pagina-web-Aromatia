import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

   return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("❌ Error en /api/signup:", error);
    return new Response(
      JSON.stringify({ error: "Error creando usuario" }),
      { status: 500 }
    );
  }
}