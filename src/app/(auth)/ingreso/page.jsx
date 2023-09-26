"use client";

import InputGroup from "@/components/form/inputGroup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({});

  const router = useRouter();

  function onInputChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmitHandler(e) {
    e.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.status !== 200) {
      return;
    }

    router.push("/");
  }

  return (
    <>
      <div className="w-[500px] shadow-md bg-white rounded-md px-20 py-16 mx-auto">
        <form onSubmit={onFormSubmitHandler}>
          <p className="text-center mb-4">Accede a tu cuenta</p>
          <div className="flex flex-col gap-4 mb-4">
            <InputGroup
              name={"email"}
              label={"email"}
              onInputChangeHandler={onInputChangeHandler}
            />
            <InputGroup
              name="password"
              label={"contraseña"}
              onInputChangeHandler={onInputChangeHandler}
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
              No tienes cuenta?{" "}
              <Link href={"/registro"} className="text-blue-500">
                Regístrate
              </Link>
            </p>
            <p>
              Olvidaste tu cuenta?{" "}
              <Link href={"#"} className="text-blue-500">
                Recuperar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
