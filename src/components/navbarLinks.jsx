"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faPowerOff,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, use, useRef, useEffect } from "react";
import { Toast } from "./providers/toastProvider";
import { useRouter } from "next/navigation";

export default function NavbarLinks() {
  const { data } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAdmin() {
      if (!data) return;
      const response = await fetch("/api/user?name=" + data.user.name);
      const userData = await response.json();
      setIsAdmin(userData.user_role === 2);
    }

    checkAdmin();
  });

  return (
    <div className=" flex items-baseline justify-end">
      <Link
        className="cursor-pointer text-black hover:text-blue-600 px-4 py-2 rounded-md"
        href={"/dojos"}
      >
        Dojos
      </Link>
      {data ? (
        <>
          {isAdmin ? (
            <Link
              href={"/dashboard"}
              className="cursor-pointer bg-blue-500 text-white px-2.5 py-1 rounded-full"
            >
              <FontAwesomeIcon icon={faDashboard} />
            </Link>
          ) : (
            <Link
              href={"/perfil"}
              className="cursor-pointer hover:bg-blue-500 hover:text-white text-blue-500 px-2.5 py-1 rounded-full transition-all duration-200"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <button
            className="px-2 py-1 text-red-800 hover:bg-red-800 hover:text-white rounded-full"
            onClick={async () => {
              const signout = await signOut({ redirect: false });
              if (signout.error) {
                return Toast.warning(
                  "Ocurrió un error al intentar cerrar sesión."
                );
              }

              Toast.success("Haz cerrado sesión correctamente");
              router.push("/inicio");
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </>
      ) : (
        <>
          <Link
            href="/registro"
            className="cursor-pointer text-black hover:text-blue-600 px-4 py-2 rounded-md"
          >
            Registro
          </Link>
          <Link
            href="/ingreso"
            className="cursor-pointer bg-blue-500 text-white px-4 py-1 rounded-md"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </>
      )}
    </div>
  );
}
