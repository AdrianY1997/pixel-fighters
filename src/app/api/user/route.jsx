import { prisma } from "@/services/database/client";

export async function GET() {
  const data = await prisma.user.findMany();

  return Response.json(data.length ? true : false);
}

export async function POST(request) {}
