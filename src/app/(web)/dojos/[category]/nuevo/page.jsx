"use client";
import InputGroup from "@/components/form/inputGroup";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewDojo() {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({})

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      if (session.status === "unauthenticated") {
        router.push("/dojos");
      }
    }

    async function getCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      const categories = data.map((e) => {
        return {
          name: e.category_name,
          value: e.category_id,
        };
      });
      setCategories(categories);
    }

    checkSession();
    getCategories();
  }, [session]);

  function onInputChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onNewDojoSubmitHandler(e) {
    if (empresa.sedes.length === 0) {
      swal("Error", "Debes ingresar al menos una sede", "error");
      return;
  }

  // Verificar que todos los campos de las sedes estén completos
  for (const sede of empresa.sedes) {
      if (!sede.Dic_S || !sede.Sec_V) {
          swal("Error", "Todos los campos de las sedes deben estar completos", "error");
          return;
      }

      for (const encargado of sede.encargados) {
          if (!encargado.N_En || !encargado.tel1) {
              swal("Error", "Todos los campos de los encargados deben estar completos", "error");
              return;
          }
      }
  }

  // Si existen errores no haga el post
  if (Object.keys(errors).length > 0) {
      swal("Error", "Por favor, corrige los errores antes de enviar el formulario", "error");
      return;
  }
    e.preventDefault();
    const response = await fetch("/api/dojo", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        user: session.data.user.name,
      }),
    });
    router.push("/dojos");
  }

  //construccion de validaciones
  const validateText = (fieldName, value) => {

    const errorsCopy = { ...errors };
    const regexText = /^[A-Za-z\s]+$/;
    if (!regexText.test(value)) {
      errorsCopy[fieldName] = `El ${fieldName} solo puede contener letras y espacios en blanco`;
    } else {
      delete errorsCopy[fieldName];
    }


    setErrors(errorsCopy);
  };

  //devuelve los errores 
  const getError = (fieldName) => {
    return errors[fieldName] || " ";
  };

  //pendiente a cambios en input
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateText(name, value);
  };

  return (
    <>
      <div className="p-4 w-full">
        <form
          className="bg-white p-4 rounded-md shadow-md"
          onSubmit={onNewDojoSubmitHandler}
        >
          <InputGroup
            name={"title"}
            label={"Titulo"}
            onInputChangeHandler={onInputChangeHandler}
            onBlurInput={handleBlur}
          />
          {getError("title") && (
            <p className="text-red-500">{getError("title")}</p>
          )}
          <InputGroup
            name={"description"}
            label={"Descripción corta"}
            onInputChangeHandler={onInputChangeHandler}
            onBlurInput={handleBlur}
          />
          {getError("description") && (
            <p className="text-red-500">{getError("description")}</p>
          )}
          <InputGroup
            name={"category"}
            label={"categoría"}
            onInputChangeHandler={onInputChangeHandler}
            type={"select"}
            options={categories}
          />
          <InputGroup
            name={"content"}
            label={"Contenido"}
            type={"textarea"}
            onInputChangeHandler={onInputChangeHandler}
            onBlurInput={handleBlur}
          />
          <button type="submit">enviar</button>
        </form>
      </div>
    </>
  );
}
