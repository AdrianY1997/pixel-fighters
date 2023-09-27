import Header from "@/components/dashboard/header";
import LateralNav from "@/components/dashboard/navlateral";

import Footer from "@/components/footer";
import { prisma } from "@/services/database/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/inicio");
  }

  const user = await prisma.user.findFirst({
    where: {
      user_name: session.user.name,
    },
  });

  if (user.user_role !== 2) {
    redirect("/inicio");
  }

  return (
    <>
      <html>
        <body className="flex bg-gray-100 min-h-screen">
          <LateralNav></LateralNav>
          <div className="flex-grow text-gray-800">
            <Header
              user={user.user_name[0].toUpperCase() + user.user_name.slice(1)}
              role="Administrador"
            ></Header>
            <main className="p-6 sm:p-10 space-y-6">
              {children}
              <section className="text-right font-semibold text-gray-500">
                <Footer></Footer>
              </section>
            </main>
          </div>
        </body>
      </html>
    </>
  );
}
