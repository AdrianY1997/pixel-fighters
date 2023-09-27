import Link from "next/link";
import React from "react";

export default function Publicaciones({ id, list }) {
  // Filtrar y transformar las publicaciones del usuario

  const myPublications = [];

  list.forEach((e) => {
    console.log(e);
    if (
      !myPublications.find((el) => el.dojo_name === e.member_dojo_id.dojo_name)
    ) {
      myPublications.push({
        category_name: e.member_dojo_id.dojo_category_id.category_name,
        category_id: e.member_dojo_id.dojo_category,
        dojo_id: e.member_dojo_id.dojo_id,
        dojo_name: e.member_dojo_id.dojo_name,
        dojo_description: e.member_dojo_id.dojo_description,
      });
    }
  });

  return (
    <div className="p-4 w-full">
      {/* Título de la sección */}
      <h1 className="text-blue-500 text-xl font-bold mb-4">Tus aportes</h1>
      <div className="flex flex-col gap-4">
        {myPublications.length ? (
          myPublications.map((e, i) => {
            return (
              // Tarjeta de publicación
              <div className="bg-white px-4 rounded-lg shadow-md" key={i}>
                {/* Categoría de la publicación */}
                <p className="text-xs text-gray-500 pb-0">{e.category_name}</p>
                <div className="p-2">
                  {/* Enlace a los detalles de la publicación */}
                  <Link
                    href={`/dojos/${e.category_id}/${e.dojo_id}`}
                    className="text-xl font-bold text-blue-500 hover:underline cursor-pointer mb-2"
                  >
                    {e.dojo_name}
                  </Link>
                  {/* Inicio del texto de la publicación */}
                  <p className="text-base text-gray-700">
                    {e.dojo_description}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          // Mensaje si no hay publicaciones
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>No hay publicaciones</p>
          </div>
        )}
      </div>
    </div>
  );
}
