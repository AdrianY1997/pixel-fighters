"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, use, useRef } from "react";

export default function NavbarLinks() {
  const { data } = useSession();
  const userMenuRef = useRef(null);

  function onUserIconHandler() {
    userMenuRef.current.classList.toggle("!hidden");
  }

  return (
    <div className=" flex items-baseline justify-end space-x-4">
      {data ? (
        <>
          <Link
            className="cursor-pointer text-black hover:text-blue-600 px-4 py-2 rounded-md"
            href={"#"}
          >
            dojos
          </Link>
          <div className="relative">
            <button
              className="cursor-pointer bg-blue-500 text-white px-2.5 py-1 rounded-full"
              onClick={onUserIconHandler}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <div
              ref={userMenuRef}
              className={`absolute flex !hidden top-full m-1 right-0 w-[100px] bg-white flex-col`}
            >
              <Link href={"/perfil"}>Mi perfil</Link>
              <button onClick={() => signOut({ redirect: "/inicio" })}>
                Cerrar Sesión
              </button>
            </div>
          </div>
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
