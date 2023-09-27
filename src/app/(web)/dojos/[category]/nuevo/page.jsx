"use client";

import InputGroup from "@/components/form/inputGroup";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewDojo() {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);

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
    e.preventDefault();
    const response = await fetch("/api/dojo", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        user: session.data.user.name,
      }),
    });
  }

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
          />
          <InputGroup
            name={"description"}
            label={"Descripción corta"}
            onInputChangeHandler={onInputChangeHandler}
          />
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
          />
          <button type="submit">enviar</button>
        </form>
      </div>
    </>
  );
}
