import { prisma } from "@/services/database/client";

export async function POST(request) {
  const params = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      user_name: params.user,
    },
  });

  const dojo = await prisma.dojo.create({
    data: {
      dojo_name: params.title,
      dojo_description: params.description,
      dojo_category: params.category,
    },
  });

  const dojomember = await prisma.dojoMember.create({
    data: {
      member_user: user.user_id,
      member_dojo: dojo.dojo_id,
    },
  });

  const publication = await prisma.publication.create({
    data: {
      publication_calification: 0,
      publication_content: params.content,
      publication_event: 0,
      publication_title: params.title,
      publication_dojo: dojo.dojo_id,
      publication_member: dojomember.member_id,
    },
  });

  return Response.json({});
}
