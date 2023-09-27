import Link from "next/link";
import React from "react";

export default function Publicaciones({ id, list }) {
  // Filtrar y transformar las publicaciones del usuario
  const myPublications = list.map((e, i) => {
    if (e.member_id == id) {
      return {
        title: e.member_dojo_id.dojo_name,
        category: e.member_dojo_id.dojo_category_id.category_name,
        id: e.member_dojo_id.dojo_id,
      };
    }
  });

  return (
    <div className="p-4 w-full">
      {/* Título de la sección */}
      <h1 className="text-blue-500 text-xl font-bold mb-4">Tus aportes</h1>
      {myPublications ? (
        myPublications.map((e, i) => {
          return (
            // Tarjeta de publicación
            <div className="bg-white px-4 rounded-lg shadow-md" key={i}>
              {/* Categoría de la publicación */}
              <p className="text-xs text-gray-500 pb-0">{e.category}</p>
              <div className="p-2">
                {/* Enlace a los detalles de la publicación */}
                <Link
                  href={`/dojos/${e.category.toLowerCase()}/${e.id}`}
                  className="text-xl font-bold text-blue-500 hover:underline cursor-pointer mb-2"
                >
                  {e.title}
                </Link>
                {/* Inicio del texto de la publicación */}
                <p className="text-base text-gray-700">Inicio del texto</p>
              </div>
            </div>
          );
        })
      ) : (
        // Mensaje si no hay publicaciones
        <p>No hay publicaciones</p>
      )}
    </div>
  );
}
