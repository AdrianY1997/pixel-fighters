"use client";

import InputGroup from "@/components/form/inputGroup";
import Link from "next/link";

export default function LoginPage() {
  function onNewUserSubmitHandler() {}

  return (
    <>
      <div className="w-[500px] shadow-md bg-white rounded-md px-20 py-16 mx-auto">
        <form onSubmit={onNewUserSubmitHandler}>
          <p className="text-center mb-4">Accede a tu cuenta</p>
          <div className="flex flex-col gap-4 mb-4">
            <InputGroup label={"usuario"} />
            <InputGroup label={"nombre"} />
            <InputGroup label={"contraseña"} />
            <InputGroup label={"repetir contraseña"} />
            <InputGroup
              type={"select"}
              options={["kouhai", "minarai", "senpai"]}
              label={"nivel de experticia"}
            />
          </div>
          <div>
            <button
              className="px-8 py-1 bg-blue-500 text-white rounded-md mb-4"
              type="submit"
            >
              Acceder
            </button>
          </div>
          <div className="text-slate-400">
            <p>
              Ya tienes cuenta?{" "}
              <Link href={"/ingreso"} className="text-blue-500">
                Acceder
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
