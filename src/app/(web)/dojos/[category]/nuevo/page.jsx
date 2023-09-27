import { prisma } from "@/services/database/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NewDojo() {
  const session = await getServerSession();

  if (!session) {
    redirect("/dojos");
  }

  const data = await prisma.user.findMany({
    select: {
      _count: true,
    },
  });

  return (
    <>
      <div className="p-4 w-full"></div>
    </>
  );
}
