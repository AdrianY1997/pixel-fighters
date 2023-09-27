import React from "react";
import User from "@/components/user";
import Dojo from "@/components/dojo";
import Publicaciones from "@/components/publicaciones";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/services/database/client";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/inicio");
  }

  const userData = await prisma.user.findFirst();
  console.log(userData);

  return (
    <div className="flex flex-grow md:flex-row">
      <div className="w-1/5 mb:w-full">
        {/* Contenedor de la primera columna (User y Dojo) */}
        <div className="sticky top-0">
          <div className="mb-4">
            <User data={userData} />
          </div>
          <div className="mb-4">
            <Dojo />
          </div>
        </div>
      </div>
      <div className="mb:w-full w-4/5 p-4 overflow-y-auto">
        {/* Contenedor de la segunda columna (Publicaciones) */}
        <Publicaciones />
      </div>
    </div>

  );
}
