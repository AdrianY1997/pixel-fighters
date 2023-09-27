'use client';
import InputGroup from "@/components/form/inputGroup";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!data.user_email) {
      newErrors.user_email = "El campo de usuario es obligatorio.";
    }
    if (!data.user_name) {
      newErrors.user_name = "El campo de nombre es obligatorio.";
    }
    if (!data.user_password) {
      newErrors.user_password = "El campo de contraseña es obligatorio.";
    }
    if (data.user_password !== data.user_password_repeat) {
      newErrors.user_password_repeat = "Las contraseñas no coinciden.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    if (validateForm()) {
      await fetch('/api/user',{
        method:"POST",
        body:JSON.stringify(data)
      }) 
      console.log("Formulario enviado con datos:", data);

      // Restablece el estado del formulario después de enviarlo, si es necesario
      setData({
        user_email: "",
        user_name: "",
        user_password: "",
        user_level: "",
      });
    }

    // Aquí puedes realizar las acciones que desees con los datos del formulario
    // Por ejemplo, puedes enviar los datos a un servidor, realizar validaciones, etc.

    console.log("Formulario enviado con datos:", data);

    // Restablece el estado del formulario después de enviarlo, si es necesario
  }

  const handleChange = (e) => {
    // Actualiza el estado del formulario cuando los campos cambian
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="w-[500px] shadow-md bg-white rounded-md px-20 py-16 mx-auto">
        <form onSubmit={handleSubmit}>
          <p className="text-center mb-4">Accede a tu cuenta</p>
          <div className="flex flex-col gap-4 mb-4">
            <InputGroup name={"user_email"} label={"usuario"} onInputChangeHandler={handleChange}/>
            {errors.user_email && (
              <p className="text-red-500">{errors.user_email}</p>
            )}
            <InputGroup name={"user_name"} label={"nombre"}  onInputChangeHandler={handleChange} />
            {errors.user_name && (
              <p className="text-red-500">{errors.user_name}</p>
            )}
            <InputGroup name={"user_password"} label={"contraseña"} onInputChangeHandler={handleChange}/>
            {errors.user_password && (
              <p className="text-red-500">{errors.user_password}</p>
            )}
            <InputGroup label={"repetir contraseña"} name={"user_password_repeat"} onInputChangeHandler={handleChange}/>
            {errors.user_password_repeat && (
              <p className="text-red-500">{errors.user_password_repeat}</p>
            )}
            <InputGroup
              name={"user_level"}
              type={"select"}
              options={["kouhai", "minarai", "senpai"]}
              label={"nivel de experticia"}
              onInputChangeHandler={handleChange}
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
