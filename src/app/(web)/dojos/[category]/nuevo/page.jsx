"use client";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NewDojo() {
  const session = useSession();
  const router = useRouter();

  useEffect(async () => {
    async function checkSession() {
      if (session.status === "unauthenticated") {
        router.push("/dojos");
      }
    }
    checkSession();
  }, [session]);

  function onNewDojoSubmitHandler() {}

  return (
    <>
      <div className="p-4 w-full">
        <form onSubmit={onNewDojoSubmitHandler}>
          <input type="hidden" name="member_id" />
        </form>
      </div>
    </>
  );
}
