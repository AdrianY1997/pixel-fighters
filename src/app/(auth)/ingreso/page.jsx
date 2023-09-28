"use client";

import InputGroup from "@/components/form/inputGroup";
import { Toast } from "@/components/providers/toastProvider";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "El correo es obligatorio.";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function onInputChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmitHandler(e) {
    e.preventDefault();

    if (validateForm()) {
      const { error } = await signIn("credentials", {
        ...formData,
        redirect: false,
      });
      if (error) {
        return Toast.warning("credenciales erroneas")
      }
      Toast.success("Inicio de seccion correcto")
    }
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
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <InputGroup
              name="password"
              label={"contraseña"}
              onInputChangeHandler={onInputChangeHandler}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
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
