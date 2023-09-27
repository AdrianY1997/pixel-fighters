"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
  const session = useSession();
  const router = useRouter();

  if (session.status == "authenticated") {
    router.push("/perfil");
  }

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
