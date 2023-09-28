"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      if (session.status == "authenticated") {
        const response = await fetch(
          "/api/user?name=" + session.data.user.name
        );
        const data = await response.json();
        if (data.user_role == 2) {
          return router.push("/dashboard");
        }
        return router.push("/perfil");
      }
    }

    checkSession();
  });

  return (
    <>
      {session.status == "loading" ? (
        <></>
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          <main className="bg-[whitesmoke]">{children}</main>
          <footer className="bg-white w-full shadow dark:bg-gray-900">
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
