"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, use, useRef, useEffect } from "react";

export default function NavbarLinks() {
  const { data } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);

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
    <div className=" flex items-baseline justify-end space-x-4">
      {data ? (
        <>
          <Link
            className="cursor-pointer text-black hover:text-blue-600 px-4 py-2 rounded-md"
            href={"/dojos"}
          >
            dojos
          </Link>
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
              className="cursor-pointer bg-blue-500 text-white px-2.5 py-1 rounded-full"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <button onClick={() => signOut({ redirect: "/inicio" })}>
            <FontAwesomeIcon className="text-red-800" icon={faPowerOff} />
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
            Acceder
          </Link>
        </>
      )}
    </div>
  );
}
