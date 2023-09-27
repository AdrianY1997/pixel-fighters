import { prisma } from "@/services/database/client";

export async function POST(request) {
  const params = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      user_name: params.user,
    },
  });

  return Response.json({});
}
