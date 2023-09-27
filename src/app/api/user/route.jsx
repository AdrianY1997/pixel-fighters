import { prisma } from "@/services/database/client";
import { NextRequest } from "next/server";

export async function GET(request) {
  const params = new NextRequest(request);
  const name = params.nextUrl.searchParams.get("name");

  const data = await prisma.user.findFirst({
    where: {
      user_name: name,
    },
  });

  return Response.json(data);
}

export async function POST(request) {
  const data = await request.json();

  const user = await prisma.user.create({
    data: {},
  });

  return Response.json(user);
}
