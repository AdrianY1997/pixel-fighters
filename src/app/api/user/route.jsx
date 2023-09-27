import { prisma } from "@/services/database/client";

export async function GET() {
  const data = await prisma.user.findMany();

  return Response.json(data.length ? true : false);
}
export async function POST(request) {
  // const data = await prisma.user.findMany();
  const datarec = await request.json()
  const user = await prisma.user.create({data:{
    user_email:datarec.user_email,
    user_name:datarec.user_name,
    user_password:datarec.user_password,
    user_level:datarec.user_level,
    user_role:"1",
  }})
  console.log(datarec);

  return Response.json({});
}
