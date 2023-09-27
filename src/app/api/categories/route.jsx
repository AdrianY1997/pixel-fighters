import { prisma } from "@/services/database/client";

export async function GET() {
  const categoryList = await prisma.category.findMany();
  return Response.json(categoryList);
}
